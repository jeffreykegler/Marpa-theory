#!perl
# Copyright 2015 Jeffrey Kegler
# This file is part of Marpa::R2.  Marpa::R2 is free software: you can
# redistribute it and/or modify it under the terms of the GNU Lesser
# General Public License as published by the Free Software Foundation,
# either version 3 of the License, or (at your option) any later version.
#
# Marpa::R2 is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
# Lesser General Public License for more details.
#
# You should have received a copy of the GNU Lesser
# General Public License along with Marpa::R2.  If not, see
# http://www.gnu.org/licenses/.
# The example from p. 166 of Leo's paper,
# augmented to test Leo prediction items.
#

use 5.010;
use strict;
use warnings;

use lib 'inc';
use Marpa::R2;

my $grammar = Marpa::R2::Scanless::G->new(
    { 
        source => \(<<'END_OF_DSL'),
rr ::= b rr | b
b ::= 'a' | c
c ::= 'a'
END_OF_DSL
    }
);

my $recce         = Marpa::R2::Scanless::R->new( { grammar => $grammar } );
my $thick_recce         = $recce->thick_g1_recce();
my $input         = 'aaaa';
my $pos           = $recce->read( \$input, 0, 0 );
my $set = 0;
READ: while (1) {
    say "Size of Earley set $set: ", $recce->earley_set_size();
    say Marpa::R2::show_earley_set($thick_recce, $set);
    last READ if $pos >= length $input;
    $pos = $recce->resume($pos, 1);
    $pos // die;
    $set += 1;
} ## end READ: while (1)

say $recce->show_progress(0, -1);

# my $value_ref = $recce->value();
# my $value = $value_ref ? ${$value_ref} : 'No parse';
# Marpa::R2::Test::is( $value,         'aaa',           'Leo SLIF parse' );

# vim: expandtab shiftwidth=4:

use 5.010;
use strict;
use warnings;

use Data::Dumper;
use Marpa::R2 2.082000;

my $size = 5;
my $input = ('a' x $size);

my $source = <<'END_OF_SOURCE';
lexeme default = latm => 1 # handy boilerplate
:default ::= action => ::array

start ::= recurse
recurse ::= recurse basis
recurse ::= basis
basis ~ 'a'
END_OF_SOURCE

my $g = Marpa::R2::Scanless::G->new( { source  => \$source } );
my $r = Marpa::R2::Scanless::R->new( { grammar => $g } );
$r->read( \$input );
say $r->show_progress(0, -1);

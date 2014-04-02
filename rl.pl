use 5.010;
use strict;
use warnings;

use Data::Dumper;
use Marpa::R2 2.082000;

my $m_size = 3;
my $n_size = 7;
my $input = ('a' x ($n_size + $m_size)) . ('b' x $n_size);
my $rev_input = reverse $input;

my $preamble = <<'END_OF_SOURCE';
lexeme default = latm => 1 # handy boilerplate
:default ::= action => ::array
END_OF_SOURCE

my %direction = (
  "rl" => [ "R ::= A | 'a' R 'b'", $input ],
  "lr" => [ "R ::= A | 'b' R 'a'", $rev_input ],
);

for my $dir (qw(rl lr)) {
    for my $rule2 ( "A ::= 'a' | A 'a'", "A ::= 'a' | 'a' A", ) {
        my ( $rule1, $test_input ) = @{ $direction{$dir} };
        my $dsl    = $preamble . $rule1 . $rule2;
        my $g      = Marpa::R2::Scanless::G->new( { source => \$dsl } );
        my $r      = Marpa::R2::Scanless::R->new( { grammar => $g } );
        my $length = length $test_input;
        say join q{ }, "Example", $dir, '||', $rule1, '||',
            $rule2;
        $r->read( \$test_input, 0, 0 );
        TOKEN: for my $loc ( 0 .. $length ) {
            say "size at loc $loc = ", $r->thick_g1_recce()->earley_set_size($loc);
            last if $loc >= $length;
            $r->resume( $loc, 1 );
        }
    } ## end for my $rule2 ( "A ::= 'a' | A 'a'", "A ::= 'a' | 'a' A"...)
} ## end for my $dir (qw(rl lr))

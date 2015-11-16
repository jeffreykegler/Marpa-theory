\begin{theorem}
\ttitle{Every Leo silo has a catena}
\label{t:leo-silo-catena}
Every layer of a Leo silo,
except the top layer
has a matching Leo top-cause.
Also, the top-down Leo causes of
a silo are a catena,
and order of the Leo memos in the
catena is the same as the order
of the Leo memos
in
the Leo silo.
\end{theorem}

\begin{proof}
We proceed by finite induction.
Let \var{slo} be a Leo silo.
For the purposes of this proof,
let \myfnname{LM}
be a partial function such that \op{LM}{\Vleo{l}}
is
the Leo memo of \Vleo{l}.

We take as the induction hypothesis
\begin{gather}
\label{t:leo-silo-catena-10}
\tag{IND1}
0 \le \var{x} < \var{topix}
\implies \Vop{LTDC}{\Vel{slo}{x}} \neq \Lambda
\\
\label{t:leo-silo-catena-12}
\tag{IND2}
0 \le \var{x} < \var{topix}
& \implies
\begin{multlined}
\text{there exists a catena \var{cat} such that} \\
\Vop{LM}{\Vel{slo}{x}} = \el{cat}{\Vlastix{cat}}
\end{multlined}
\end{align}

We take $\var{x} = 0$
as the basis of our induction.
By assumption for the theorem,
\var{slo} is a Leo silo,
so that, by the definition of a Leo silo,
there
is a Leo memo matching
\el{slo}{0}.
which gives us
\eqref{t:leo-silo-catena-10}.
The single element sequence
\var{cat} = [ \el{slo}{0} ]
satisfies
\eqref{t:leo-silo-catena-12}
trivially.

For the step of the induction, we assume
\eqref{t:leo-silo-catena-10}
and
\eqref{t:leo-silo-catena-12}
for \var{x} = \var{i},
to show
\eqref{t:leo-silo-catena-10}
and
\eqref{t:leo-silo-catena-12}
for $\var{x} = \Vincr{i}$.
Within the step, we proceed by cases.

\textbf{Step case 1}: For the case where $\var{i} > \var{topix}$,
we have
\eqref{t:leo-silo-catena-10}
and
\eqref{t:leo-silo-catena-12}
vacuously.

\textbf{Step case 2}: We next consider
the case where $\var{i} \le \var{topix}$
and \Vel{slo}{i} is incomplete.
Since \Vel{slo}{i} is
by assumption for the step,
a silo layer,
it is quasi-complete.
Also by assumption for the step,
\Vel{slo}{i} has a matching Leo memo.
Using these facts and Lemma
\ref{lem:leo-memo-of-incompletion},
we have
\eqref{t:leo-silo-catena-32}
This shows the step, for this case.

\textbf{Step case 3}: Finally,
we consider
the case where $\var{i} \le \var{topix}$
and \Vel{slo}{i} is complete.
Since \Vel{slo}{i} is complete,
Lemma \ref{lem:leo-memo-effect} applies,
and we have
\eqref{t:leo-silo-catena-25},
\eqref{t:leo-silo-catena-28},
\eqref{t:leo-silo-catena-31}
and
\eqref{t:leo-silo-catena-32}
of the induction hypothesis for this case
from
\eqref{eq:lem-leo-memo-effect-10},
\eqref{eq:lem-leo-memo-effect-12},
\eqref{eq:lem-leo-memo-effect-13}
and
\eqref{eq:lem-leo-memo-effect-14}
of
Lemma \ref{lem:leo-memo-effect}.
This shows shows the final case of the induction
step, and therefore the step and the induction.

The induction shows Requirements
\eqref{t:leo-silo-catena-6}
and
\eqref{t:leo-silo-catena-8}
of the theorem
and
\begin{equation}
\label{t:leo-silo-catena-36}
\forall \var{x} : 0 \le \var{x} < \var{topix}
\implies
\text{\Vel{slo}{x} has a matching Leo memo}
\end{equation}
\end{proof}

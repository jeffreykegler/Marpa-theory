\begin{theorem}
\ttitle{Leo silo validity}
\label{t:leo-silo-validity}
Let
\begin{equation*}
\Vleo{leo} = [ \Vsym{transition}, \Vdr{top}, \Vorig{top}, \Vloc{i} ]
\end{equation*}
be an instantiated Leo memo and \Vinst{lb} a valid matching bottom.
Then for every EIM equivalent of \Vinst{lb}, call it \Veim{lb},
\begin{gather}
\label{t:leo-silo-validity-2}
\myparbox{there is a silo,
call it \var{slo}, whose bottom is \Veim{lb};}
\\
\label{t:leo-silo-validity-4}
\myparbox{the top of \var{slo} is
\op{Leo-top}{\Vleo{leo}, \Right{\Veim{lb}}};}
\\
\label{t:leo-silo-validity-6}
\myparbox{every layer of \var{slo} above the bottom is right-recursive; and}
\\
\label{t:leo-silo-validity-8}
\myparbox{every layer of \var{slo} below the top has exactly one effect.}
\end{gather}
\end{theorem}

\begin{proof}
Theorems
\ref{t:eim-equivalent-from-non-terminal}
and
\ref{t:leo-transition-symbol-non-terminal}
guarantee that
\Vinst{lb} has at least one valid EIM equivalent,
call it \Veim{lb},
such that
\begin{equation}
\label{t:leo-silo-validity-9}
\Valid{\Veim{lb}}
\end{equation}

As an EIM equivalent,
\Veim{lb} is complete,
and therefore quasi-complete,
so that,
by the definition of a silo,
it is in a silo,
if only the trivial silo containing just itself.
This shows
\eqref{t:leo-silo-validity-2}.

Let
\var{topix} and \Veim{top} be
such that
\begin{equation}
\Veim{top} = \Vel{slo}{topix} = \op{Leo-top}{\Vleo{leo}, \Right{\Veim{lb}}}
\end{equation}
We need to ensure that our notation
does not assume that \Veim{top} is a layer of
\var{slo},
since we have yet to prove this.
If \Veim{top} is not a layer of \var{slo}
we say \var{topix} is undefined
and that, for every integer \var{i},
$\var{i} < \var{topix}$.

We next proceed by finite induction.
We take as the induction hypothesis
\begin{align}
\label{t:leo-silo-validity-25}
\tag{IND1}
0 \le \var{x} \le \var{topix}
& \implies \Valid{\Vel{slo}{x}}
\\
\label{t:leo-silo-validity-28}
\tag{IND2}
0 < \var{x} \le \var{topix}
& \implies \text{\Vel{slo}{x} is right recursive}
\\
\label{t:leo-silo-validity-31}
\tag{IND3}
0 < \var{x} \le \var{topix}
& \implies
\begin{multlined}
\text{\Vel{slo}{x} is the unique effect} \\
\text{of \el{slo}{\Vdecr{x}}, and}
\end{multlined}
\\
\label{t:leo-silo-validity-32}
\tag{IND4}
0 \le \var{x} < \var{topix}
& \implies
\text{\Vel{slo}{x} has a matching Leo memo}
\end{align}
For $\var{x} = 0$,
we have
\eqref{t:leo-silo-validity-25} from
\eqref{t:leo-silo-validity-9},
and we have
\eqref{t:leo-silo-validity-28}
and
\eqref{t:leo-silo-validity-31}
vacuously.
By assumption for the theorem,
\Vleo{leo} is a Leo memo matching
$\el{slo}{0} = \Veim{lb}$,
which gives us
\eqref{t:leo-silo-validity-32}.
We take $\var{x} = 0$
as the basis of our induction.

For the step of the induction, we assume
\eqref{t:leo-silo-validity-25},
\eqref{t:leo-silo-validity-28},
\eqref{t:leo-silo-validity-31}
and
\eqref{t:leo-silo-validity-32}
for \var{x} = \var{i},
to show
\begin{equation}
\label{t:leo-silo-validity-34}
\tag{STEP}
\text{\eqref{t:leo-silo-validity-25},
\eqref{t:leo-silo-validity-28},
\eqref{t:leo-silo-validity-31}
and
\eqref{t:leo-silo-validity-32}
for $\var{x} = \Vincr{i}$.}
\end{equation}
Within the step, we proceed by cases.

\textbf{Step case 1}: For the case where $\var{i} > \var{topix}$,
we have
\eqref{t:leo-silo-validity-34}
vacuously.

\textbf{Step case 2}: We next consider
the case where $\var{i} \le \var{topix}$
and \Vel{slo}{i} is incomplete.
By assumption for the step
\Vel{slo}{i} is a valid silo layer,
and therefore a quasi-completion.
Since
\Vel{slo}{i} is a valid quasi-completion,
we can use
\eqref{eq:quasi-completion-silo-14}
of
Theorem
\ref{t:quasi-completion-silo}
tells us that
\el{slo}{\Vincr{i}} is valid,
which shows
\eqref{t:leo-silo-validity-25}.

\eqref{eq:quasi-completion-silo-18}
of
Theorem
\ref{t:quasi-completion-silo} tells us that
the rule of \Vel{silo}{i}
is the rule of
the rule of \el{silo}{\Vincr{i}}.
Since the
the rule of \Vel{silo}{i}
is right recursive by assumption for the step,
we have
\eqref{t:leo-silo-validity-28}.

By assumption for the case,
\Vel{slo}{i} is not complete,
so that
\eqref{eq:quasi-completion-silo-22}
of
Theorem
\ref{t:quasi-completion-silo} tells us that
the unique effect of \Vel{silo}{i}
is \el{silo}{\Vincr{i}}.
This shows
\eqref{t:leo-silo-validity-31}
for this case.

Again,
by assumption for the case
\Vel{slo}{i} is not complete.
Since it is,
by assumption for the step,
a silo layer,
it is quasi-complete.
Also by assumption for the step,
\Vel{slo}{i} has a matching Leo memo.
Using these facts and Lemma
\ref{lem:leo-memo-of-incompletion},
we have
\eqref{t:leo-silo-validity-32}
This shows the step, for this case.

\textbf{Step case 3}: Finally,
we consider
the case where $\var{i} \le \var{topix}$
and \Vel{slo}{i} is complete.
Since \Vel{slo}{i} is complete,
Lemma \ref{lem:leo-memo-effect} applies,
and we have
\eqref{t:leo-silo-validity-25},
\eqref{t:leo-silo-validity-28},
\eqref{t:leo-silo-validity-31}
and
\eqref{t:leo-silo-validity-32}
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
\eqref{t:leo-silo-validity-6}
and
\eqref{t:leo-silo-validity-8}
of the theorem
and
\begin{equation}
\label{t:leo-silo-validity-36}
\forall \var{x} : 0 \le \var{x} < \var{topix}
\implies
\text{\Vel{slo}{x} has a matching Leo memo}
\end{equation}

It remains to show that there is
a \var{slo} such that one of its layers is
\begin{equation}
\label{t:leo-silo-validity-36a}
\op{Leo-top}{\Vleo{leo}, \Right{\Veim{lb}}}.
\end{equation}
which is Requirement
\eqref{t:leo-silo-validity-4}
of the theorem.
We assume, for a reductio, that there is no such silo.

For the purpose of this proof, we will call a silo ``maximal''
if it is not a proper subsequence of any larger silo.
Every silo has at least one maximal silo,
though in the trivial case
a silo is its own maximal silo.
Let a maximal silo of \var{slo} be \var{mslo}.
By Theorem
\ref{t:silo-finite}, any silo containing
\Veim{lb} must be finite,
and so that \var{mslo} must have a highest layer.
Let the index of that highest layer be \var{maxix}.
By assumption for the reductio,
\var{mslo}
does not contain
\eqref{t:leo-silo-validity-36a}
so that, in particular,
\begin{equation}
\label{t:leo-silo-validity-37}
\tag{RAA}
\Vel{mslo}{maxix} \neq
\op{Leo-top}{\Vleo{leo}, \Right{\Veim{lb}}}.
\end{equation}

From
\eqref{t:leo-silo-validity-36},
we see that \Vel{slo}{maxix} has
a matching Leo memo.
We consider two cases, based on whether
\Vel{mslo}{maxix} is complete or incomplete.

\textbf{Case 1}:
Assume for the case that
\Vel{mslo}{maxix} is incomplete.
If
\Vel{mslo}{maxix} is a
quasi-complete silo layer,
by
Theorem
\ref{t:quasi-completion-silo},
it is the bottom of some silo,
call it \var{slo1}, such that
\begin{equation}
\label{t:leo-silo-validity-40}
\text{\el{slo1}{\Vlastix{slo1}} is a completion}
\end{equation}
Since
$\Vel{mslo}{maxix} = \el{slo1}{0}$ is the bottom
of \var{slo1},
we have
\begin{equation}
\label{t:leo-silo-validity-42}
\Vel{mslo}{maxix} \le \el{slo1}{\Vlastix{slo1}}.
\end{equation}
\var{slo1} and \var{mslo} overlap in
$\Vel{mslo}{maxix} = \el{slo1}{0}$,
so we can compose them into a new silo, \var{slo2},
such that
\begin{equation}
\label{t:leo-silo-validity-43}
\begin{gathered}
\Vel{mslo}{maxix} = \el{slo1}{0} = \el{slo2}{\Vlastix{slo1}}
	\quad \text{and} \\
\el{slo1}{\Vlastix{slo1}} = \el{slo2}{\Vlastix{slo2}}.
\end{gathered}
\end{equation}
By assumption for the case \Vel{mslo}{maxix} is incomplete,
so that
from \eqref{t:leo-silo-validity-40}
we know that
\begin{equation}
\label{t:leo-silo-validity-46}
\Vel{mslo}{maxix} \neq \el{slo1}{\Vlastix{slo1}}.
\end{equation}
From
\eqref{t:leo-silo-validity-40}
and
\eqref{t:leo-silo-validity-46}
we see that
\begin{equation}
\label{t:leo-silo-validity-49}
\Vel{mslo}{maxix} < \el{slo1}{\Vlastix{slo1}}.
\end{equation}
But, by assumption for the reductio,
\Vel{mslo}{maxix} has no silo layer above it.
This contradiction shows this Case 1 of the reductio.

\textbf{Case 2}:
Assume for the case that
\Vel{mslo}{maxix} is complete.
Since
\Vel{mslo}{maxix} has a matching Leo memo,
by
Lemma \ref{lem:leo-memo-effect},
it has a silo effect.
So there is another silo, call it \var{mslo2},
such that
there is a silo layer
\el{mslo2}{\Vincr{maxix}}.
This means that \var{mslo} is a proper
subsequence of \var{mslo2}.
But by assumption, \var{mslo2} was what we call
for this proof,
``maximal'',
and therefore not a proper subsequence of any
other silo.
This contradiction shows this Case 1 of the reductio
and the reductio.

From the reductio, we see that \var{slo}
must contain
\eqref{t:leo-silo-validity-36a},
the top item for \Vleo{leo}.
This shows Requirement
\eqref{t:leo-silo-validity-4}
and the theorem.
\end{proof}

\begin{definition}
\dtitle{Leo silo}
Let \Vleo{l} be a Leo memo.
A
\dfn{Leo silo}
is a silo whose bottom is the matching bottom
of \Vleo{l},
and whose top is
\[
\op{Leo-top}{\Vleo{leo}, \Vloc{i}},
\]
where
\Vloc{i} is the location
of the silo.
\end{definition}


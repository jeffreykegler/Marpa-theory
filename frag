\begin{lemma}
\label{lem:silo-reflection-nulling}
Let \el{silo}{\Vincr{i}},
\Vel{silo}{i},
be two silo layers,
where
\begin{equation*}
\text{\Predot{\el{silo}{\Vincr{i}}} is a nulling terminal.}
\end{equation*}
Then
\begin{equation*}
\op{Valid-eq}{\el{silo}{\Vincr{i}}} \xderives{0] \op{Valid-eq}{\el{silo}{\var{i}}}
\end{equation*}
where the $\xderives{0]$ indicates a trivial derivation,
that is,
a derivation of zero steps.
\end{lemma}

\begin{proof}
Without loss of generality, we let
\begin{equation}
\label{eq:lem-silo-reflection-nulling-10}
\el{silo}{\Vincr{i}} = \bigl[ [\Vsym{A} \de \Vstr{pre-B} \Vsym{B} \mydot \Vstr{post-B}], \var{a}, \var{c} \bigr],
\end{equation}
where, by assumption for the theorem,
\Vsym{B} is nulling.

Since \Vsym{B} is a non-terminal,
we know from Theorem \ref{t:silo-causes},
that \Vel{silo}{i}, its silo cause,
is its top-down cause.
From Theorem \ref{t:symbolic-causes-from-effect}, we know
that the top-down cause of
\eqref{eq:lem-silo-reflection-nulling-10}
is
\begin{equation}
\label{eq:lem-silo-reflection-nulling-12}
\el{silo}{\var{i}} = \bigl[ [\Vsym{A} \de \Vstr{pre-B} \mydot \Vsym{B} \Vstr{post-B}], \var{a}, \var{c} \bigr],
\end{equation}
The validity equivalent of 
\eqref{eq:lem-silo-reflection-nulling-10}
is
\begin{equation}
\label{eq:lem-silo-reflection-nulling-14}
\op{Valid-eq}{\el{silo}{\Vincr{i}}} =
\Vsym{A} \derives \Vmk{a} \Vstr{pre-B} \Vsym{B} \Vmk{c} \Vstr{post-B}.
\end{equation}
and 
the validity equivalent of 
\eqref{eq:lem-silo-reflection-nulling-12}
is
\begin{equation}
\label{eq:lem-silo-reflection-nulling-16}
\op{Valid-eq}{\el{silo}{\var{i}}} =
\Vsym{A} \derives \Vmk{a} \Vstr{pre-B} \Vmk{c} \Vsym{B} \Vstr{post-B}.
\end{equation}
But since $\Vsym{B} \derives \epsilon$, we know that both
\eqref{eq:lem-silo-reflection-nulling-14}
and \eqref{eq:lem-silo-reflection-nulling-16}
are equivalent to
\begin{equation}
\label{eq:lem-silo-reflection-nulling-19}
\Vsym{A} \derives \Vmk{a} \Vstr{pre-B} \Vmk{c} \Vsym{B} \Vmk{c} \Vstr{post-B}.
\end{equation}
so that
\begin{equation}
\op{Valid-eq}{\el{silo}{\Vincr{i}}} \xderives{0}
\op{Valid-eq}{\el{silo}{\var{i}}}.
\end{equation}
\end{proof}


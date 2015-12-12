We proceed by induction
on the number of passes through the main loop.
Let \var{seq} be a sequence of set of EIM's,
such that
\begin{equation}
\label{t:leo-reconstruction-silo-10}
\Vel{seq}{x} = \lbrace \Veim{lb} \rbrace \cup \lbrace text{EIM's added to Earley tables in passes 0 \ldots \var{x}} \rbrace.
\end{equation}
For the induction hypothesis, we use
\begin{equation}
\label{t:leo-reconstruction-silo-13}
\tag{IND}
\begin{gathered}
\text{\Vel{psl}{x} is a silo},
\\
\text{$(\Vel{psl}{x})[0] = \Veim{lb}$, and}
\\
\forall \; \var{i} : \var{i} \ge 1 \implies \text{$(\Vel{psl}{x})[\var{i}]$ is the unique silo effect of $(\Vel{psl}{x}}[\Vdecr{i}]$}
\end{gathered}
\end{equation}

From \eqref{t:leo-reconstruction-silo-10}, we see that
\begin{equation}
\label{t:leo-reconstruction-silo-17}
\el{psl}{0} = \lbrace \Veim{lb} \rbrace.
\end{equation}
\el{psl}{0} satisifies
\eqref{t:leo-reconstruction-silo-13} for
$\var{x} = 0$,
and we take this as the basis of our induction.

For the step of the induction, we assume that
\eqref{t:leo-reconstruction-silo-13} is true
for $\var{x} = \var{i}$,
to show that
\eqref{t:leo-reconstruction-silo-13} is true
for $\var{x} = \Vincr{i}$.

TODO revise from here

By assumption for the step,
\vatp{\Veim{up}}{\var{top}}{\var{i}}
is valid and complete and matches
\vatp{\Vleo{memo}}{\var{top}}{\var{i}},
which is instantiated.
The effect of
\vatp{\Veim{up}}{\var{top}}{\var{i}}
and
\vatp{\Vleo{memo}}{\var{top}}{\var{i}}
is assigned to
\vatp{\Veim{lasting}}{\ref{line:reconstruct-memoized-eims-loop-23}}{\var{i}}.
We know from
Lemma \ref{lem:leo-memo-effect} that
\begin{align}
\label{t:leo-reconstruction-silo-34}
& \myparbox{
\vatp{\Veim{lasting}}{\ref{line:reconstruct-memoized-eims-loop-23}}{\var{i}}
is valid and the silo effect of
\vatp{\Veim{up}}{\var{top}}{\var{i}}
$\because$
\eqref{eq:lem-leo-memo-effect-10},
\eqref{eq:lem-leo-memo-effect-10a};
}
\\
\label{t:leo-reconstruction-silo-35}
& \myparbox{if
\vatp{\Vleo{memo}}{\var{top}}{\var{i}}
has an instantiated top-down cause, then
\Memo{\vatp{\Veim{lasting}}{\ref{line:reconstruct-memoized-eims-loop-23}}{\var{i}}}
is the top-down cause of
\vatp{\Vleo{memo}}{\var{top}}{\var{i}}
$\because$
\eqref{eq:lem-leo-memo-effect-15};
}
\\
\notag
& \myparbox{
\vatp{\Vleo{memo}}{\ref{line:reconstruct-memoized-eims-loop-46}}{\var{i}}
is well-formed
$\because$
\eqref{t:leo-reconstruction-silo-35};
}
\end{align}

We have shown that the assignments as far as
line \ref{line:reconstruct-memoized-eims-loop-23}
of Algorithm \ref{alg:reconstruct-memoized-eims}
are well-defined, and therefore that they are well-formed.
We will now show that the remaining assignments are well-formed.
By Theorem
\ref{t:maximal-fleeting-closure-validity}
\vatp{\Veim{lasting}}{\ref{line:reconstruct-memoized-eims-loop-23}}{\var{i}}
is in exactly one maximal fleeting closure,
so that
\vatp{\var{mfc}}{\ref{line:reconstruct-memoized-eims-loop-39}}{\var{i}}
is well-defined.
Every fleeting closure, contains at least that EIM which is its base,
and a maximal fleeting closure, by its definition,
must contain its own lasting base.
Therefore
the maximal fleeting closure
\vatp{\var{mfc}}{\ref{line:reconstruct-memoized-eims-loop-39}}{\var{i}}
contains at least one element,
so that
\vatp{\Veim{up}}{\ref{line:reconstruct-memoized-eims-loop-43}}{\var{i}}
is well-defined.

Finally, for line \ref{line:reconstruct-memoized-eims-loop-46},
we consider
\vatp{\Vleo{memo}}{\ref{line:reconstruct-memoized-eims-loop-46}}{\var{i}}
to be well-formed,
even if it is undefined.
Line \ref{line:reconstruct-memoized-eims-loop-first} filters out
the undefined values of \Vleo{memo}.

By
\eqref{t:leo-reconstruction-silo-34},
\vatp{\Veim{lasting}}{\ref{line:reconstruct-memoized-eims-loop-23}}{\var{i}}
is a silo effect
and therefore, by the definition of a silo,
\vatp{\Veim{lasting}}{\ref{line:reconstruct-memoized-eims-loop-23}}{\var{i}}
is quasi-complete.
Since
\vatp{\Veim{lasting}}{\ref{line:reconstruct-memoized-eims-loop-23}}{\var{i}}
is quasi-complete,
by Theorem
\ref{t:maximal-fleeting-closure-silo},
\vatp{\var{mfc}}{\ref{line:reconstruct-memoized-eims-loop-39}}{\var{i}}
is a fleeting closure silo.
By the properties of a fleeting closure
silo, we know that all of its layers are valid
and that its last layer is a completion,
so that
\begin{align}
\label{t:leo-reconstruction-silo-39}
& \myparbox{
\vatp{\Veim{up}}{\ref{line:reconstruct-memoized-eims-loop-43}}{\var{i}}
is valid and a completion.
}
\\
\label{t:leo-reconstruction-silo-40b}
& \myparbox{
Let \Vleo{next} be
the top-down cause of
\vatp{\Vleo{memo}}{\var{top}}{\var{i}}.
Note that \Vleo{next} may be undefined
or uninstantiated.
Then
}
\\
\label{t:leo-reconstruction-silo-40d}
& \myparbox{
$\Memo{\vatp{\Veim{lasting}}{\ref{line:reconstruct-memoized-eims-loop-23}}{\var{i}}}
=
\Vleo{next}
\because$
\eqref{t:leo-reconstruction-silo-35},
\eqref{t:leo-reconstruction-silo-40b};
}
\\
\label{t:leo-reconstruction-silo-40e}
& \myparbox{
$\vatp{\Veim{lasting}}{\ref{line:reconstruct-memoized-eims-loop-23}}{\var{i}}
\in
\vatp{\var{mfc}}{\ref{line:reconstruct-memoized-eims-loop-39}}{\var{i}}
\because$
Def of fleeting closure,
  line \ref{line:reconstruct-memoized-eims-loop-39};
}
\\
\label{t:leo-reconstruction-silo-40g}
& \myparbox{
$\vatp{\Veim{up}}{\ref{line:reconstruct-memoized-eims-loop-43}}{\var{i}}
\in
\vatp{\var{mfc}}{\ref{line:reconstruct-memoized-eims-loop-39}}{\var{i}}
\because$
line \ref{line:reconstruct-memoized-eims-loop-43};
}
\\
\label{t:leo-reconstruction-silo-40i}
& \myparbox{
$\Memo{\vatp{\Veim{up}}{\ref{line:reconstruct-memoized-eims-loop-43}}{\var{i}}}
= \Vleo{next} \because$
Theorem \ref{t:leo-memo-fleeting closure},
\eqref{t:leo-reconstruction-silo-40d},
\eqref{t:leo-reconstruction-silo-40e},
\eqref{t:leo-reconstruction-silo-40g};
}
\\
\label{t:leo-reconstruction-silo-40k}
& \myparbox{
$\vatp{\Vleo{memo}}{\ref{line:reconstruct-memoized-eims-loop-46}}{\var{i}}
= \Vleo{next}
\because$
\eqref{t:leo-reconstruction-silo-40b},
line \ref{line:reconstruct-memoized-eims-loop-46};
}
\\
\label{t:leo-reconstruction-silo-40m}
& \myparbox{\vatp{\Vleo{memo}}{\var{top}}{\Vincr{i}} is instantiated
$\because$
line \ref{line:reconstruct-memoized-eims-loop-first};
}
\\
\label{t:leo-reconstruction-silo-40o}
& \vatp{\Vleo{memo}}{\ref{line:reconstruct-memoized-eims-loop-46}}{\var{i}}
= \vatp{\Vleo{memo}}{\var{top}}{\Vincr{i}}
\because \text{Algorithm \ref{alg:reconstruct-memoized-eims}}
\\
\label{t:leo-reconstruction-silo-40q}
& \vatp{\Veim{up}}{\ref{line:reconstruct-memoized-eims-loop-43}}{\var{i}}
= \vatp{\Veim{up}}{\var{top}}{\Vincr{i}}
\because \text{Algorithm \ref{alg:reconstruct-memoized-eims}};
\\
\label{t:leo-reconstruction-silo-40s}
& \myparbox{
\vatp{\Veim{up}}{\var{top}}{\Vincr{i}}
is valid and a completion
$\because$
\eqref{t:leo-reconstruction-silo-39},
\eqref{t:leo-reconstruction-silo-40q};
}
\\
\label{t:leo-reconstruction-silo-40u}
& \myparbox{
$\Memo{\vatp{\Veim{up}}{\var{top}}{\Vincr{i}}}
= \vatp{\Vleo{memo}}{\var{top}}{\Vincr{i}}
\because$
\eqref{t:leo-reconstruction-silo-40i},
\eqref{t:leo-reconstruction-silo-40k},
\eqref{t:leo-reconstruction-silo-40o}.
}
\end{align}

\eqref{t:leo-reconstruction-silo-40m}
\eqref{t:leo-reconstruction-silo-40s}
and
\eqref{t:leo-reconstruction-silo-40u}
are
\eqref{t:leo-reconstruction-silo-10}
for $\var{x} = \Vincr{i}$,
and therefore the step of the induction.
With this we have the induction and the theorem.

TODO: Done?


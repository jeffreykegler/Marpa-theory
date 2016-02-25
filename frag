\begin{theorem}
\ttitle{Medial EIM as a cause}
\label{t:medial-eim-as-cause}
Assume that
\begin{subequation}
\rewew
\begin{align}
\label{t:medial-eim-as-cause-asm-1}
& \myparbox{%
There exist two valid EIM's,
such that \Veim{cuz}
is the cause of \Veim{eff}.
} \\
\label{t:medial-eim-as-cause-asm-1}
& \myparbox{%
\Veim{cuz} is incomplete.
} \\
\label{t:medial-eim-as-cause-asm-1}
& \myparbox{%
\Veim{cuz} is not a prediction.
} \\
\end{align}
\end{subequation}
Given these assumptions, then
\begin{subequation}
\rewew
\begin{align}
\label{t:medial-eim-as-cause-req-1}
& \myparbox{%
\Veim{cuz} is a top-down cause of \Veim{eff}.
} \\
\label{t:medial-eim-as-cause-req-2}
& \myparbox{%
\Veim{cuz} is not the bottom-up cause of any effect.
}
\intertext{%
and one of the following two
cases hold:
}
\label{t:medial-eim-as-cause-req-3a}
& \myparbox{%
\Veim{eff} is a confirmed EIM.
and the effect of the cause-pair
$[ \Veim{cuz}, \Vinst{up} ]$,
where \Vinst{up} is a parse instance.
} \\
\label{t:medial-eim-as-cause-req-3b}
& \myparbox{
\Veim{eff} is a predicted EIM
whose top-down cause is \Veim{cuz}
and whose bottom-up cause is ethereal.
}
\end{align}
\end{subequation}
\end{theorem}

\begin{proof}
We proceed by cases.

\textbf{Top-down cause of a prediction}:
If \Veim{eff} is a prediction,
then its bottom-up cause is ethereal
\becuz{} TODO.
Therefore, \Veim{cuz} must be its top-down cause.

\textbf{Bottom-up cause of a prediction}:
If \Veim{eff} has no predot symbol,
then its bottom-up cause is ethereal
\dref[causes of a predicted EIM]{def:causes-predicted}.
\Veim{cuz} is clearly not ethereal,
so that \Veim{cuz} is not the bottom-up cause of \Veim{eff}.

\textbf{Top-down cause of a confirmation}:
If \Veim{eff} has a predot symbol,
its causes are in a pair of matching causes
\dref[causes of a confirmed EIM]{def:causes-confirmed}.
TODO: finished?

\textbf{Bottom-up cause of a confirmation}:
The bottom-up cause of a confirmation must have a
symbolic equivalent
\becuz{} TODO.
\Veim{cuz} is incomplete and therefore has no
symbolic equivalent
\becuz{} TODO.

TODO: finished?
\end{proof}


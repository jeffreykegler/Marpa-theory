\textbf{Non-terminal}:
We now consider the case where
\begin{equation}
\label{eq:silo-reflection-37}
\text{\Predot{\Vinst{given}} is a non-terminal}.
\end{equation}
Using the assumption for the step, we know that
\begin{equation}
\label{eq:silo-reflection-40}
\op{Valid-eq}{\Vel{silo}{n}} \destar
\op{Valid-eq}{\Vinst{given}}.
\end{equation}
From
\eqref{eq:silo-reflection-17}
and Lemma \ref{lem:silo-reflection-nt}, we know that
\begin{equation}
\label{eq:silo-reflection-42}
\op{Valid-eq}{\Vinst{given}}
\derives
\op{Valid-eq}{\Vinst{sought}}.
\end{equation}
Combining
\eqref{eq:silo-reflection-40}
and
\eqref{eq:silo-reflection-42},
we have
\begin{equation}
\label{eq:silo-reflection-44}
\op{Valid-eq}{\Vel{silo}{n}}
\derives
\op{Valid-eq}{\Vinst{sought}}
\end{equation}
\eqref{eq:silo-reflection-44} is
\eqref{eq:silo-reflection-10} for \Vincr{i},
giving us the case of a non-terminal.


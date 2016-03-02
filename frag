\begin{theorem}
\ttitle{Inverse \myfnname{null-scan-op} definedness}
\label{t:inverse-null-scan-op-definedness}
The inverse of
\myfnname{null-scan-op} is defined if and only if
the predot symbol of its argument is nulling:
\[
\iop{null-scan-op}{(-1)}{\Veim{cuz}} \neq \undefined
\equiv \Predot{\Veim{cuz}} = \epsilon.
\]
Further, if \myfnname{null-scan-op} is defined,
then
\[
\begin{gathered}
\Rule{\Veim{e}} = \Rule{\Vop{null-scan-op}{\Veim{e}}}, \\
\Left{\Veim{e}} = \Left{\Vop{null-scan-op}{\Veim{e}}}, \\
\Right{\Veim{e}} = \Right{\Vop{null-scan-op}{\Veim{e}}}, \text{and} \\
\Vdecr{\Dotix{\Veim{e}}} = \Dotix{\Viop{null-scan-op}{(-1)}{\Veim{e}}}.
\end{gathered}
\]
\end{theorem}

\begin{proof}
This theorem follows from
\tref{t:inverse-null-scan-op-definedness}.
\end{proof}


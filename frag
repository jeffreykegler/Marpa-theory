\begin{theorem}
\label{t:reduction-tries}
For a Marpa grammar,
the number of attempts to add reduction EIM's
will be \On[3].
\end{theorem}

\begin{proof}
Let \var{tries} be the number of attempts to add reduction EIM's to
the Earley tables.
\Marpa{} attempts to add an Earley reduction result
to the Earley tables
once for every pair of matching causes,
\begin{equation}
\label{eq:reduction-tries-1}
[\Veim{down}, \Veim{up}].
}
\end{equation}
Therefore, if \var{cause-pairs} is the number of matching cause pairs
in the Earley tables,
then \var{cause-pairs} is also the number of attempt to add
reduction EIM's that \Marpa{} will make.

Recall that the first element of each pair of matching causes
is its top-down cause,
and the second element of each pair is its bottom-up cause.
For brevity, we will call the top-down cause of a matching pair
of causes, its ``down-cause'',
and we will call the bottom-up cause of a matching pair of
cause, its ``up-cause''.
We can see that
\[
    \var{cause-pairs} = \var{up-count} \times \var{downs-per-up},
\]
where
\var{up-count} is the number of EIM's which are
up-causes,
and \var{downs-per-up} is the maximum number of 
down-causes for any up-cause, that is
\[
   \var{downs-per-up} = \max_{\Veim{up}} \bigsize{ \Veim{down} | \text{[\Veim{down}, \Veim{up}] \in \var{cause-pairs} } 
\]

To determine an upper bound for \var{downs-per-up} we note that

TODO: to here

\end{proof}


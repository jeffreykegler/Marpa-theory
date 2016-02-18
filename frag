\begin{theorem}
\ttitle{Matching Leo memo of Leo effect}
\label{matching-memo-of-Leo-effect}
Let \Veim{cuz} be a valid EIM;
and let \Vleo{l} be a matching,
instantiated, Leo memo.
Let \Veim{bas} be the basis of \Vleo{l}.
Then,
\begin{subequations}
\renewcommand{\theequation}{R\arabic{equation}}
\begin{align}
\label{eq:matching-memo-of-leo-effect-req-1}
& \myparbox{%
\Veim{eff} has an instantiated matching Leo memo,
if and only if \Vleo{l} has a top-down cause.
} \\
\label{eq:matching-memo-of-leo-effect-req-1}
& \myparbox{%
If \Veim{eff} has an instantiated matching Leo memo,
that Leo memo is the top-down cause of \Vleo{leo}.
}
\end{align}
\end{subequations}
\end{theorem}

\begin{proof}
To show Requirement
\eqref{eq:matching-memo-of-leo-effect-5l}
of this theorem,
we use a conditional proof, where we
assume
\begin{align}
\label{eq:matching-memo-of-leo-effect-50}
\tag{CD}
& \myparbox{%
$\exists \; \Vleo{eff} : \Memo{\Veim{eff}} = \Vleo{eff}$
\becuz{} ASM for conditional; and
} \\
\label{eq:matching-memo-of-leo-effect-52}
& \myparbox{%
\Instantiated{\Vleo{eff}}
\becuz{} ASM for conditional.
} \\
\label{eq:matching-memo-of-leo-effect-54}
& \myparbox{%
$\LSY{\Vleo{eff}} = \LSY{\Veim{eff}}$
\becuz{}
\eqref{eq:matching-memo-of-leo-effect-50},
\dref[matching Leo memo]{def:eim-matching-leo-memo}.
}
\intertext{%
Deducing the top-down cause (\Veim{bas})
from its effect (\Veim{eff}),
taking into account that the bottom-up cause (\Veim{cuz})
is telluric, we have
}
\label{eq:matching-memo-of-leo-effect-58}
& \myparbox{%
$\Veim{bas} = \big[\Prev{\DR{\Veim{eff}}}, \Origin{\Veim{eff}}, \var{j}
\big]$
for some $\var{j} < \Current{\Veim{eff}}$
\becuz{}
\eqref{eq:matching-memo-of-leo-effect-21a},
\eqref{eq:matching-memo-of-leo-effect-36},
\tref{t:down-cause-from-effect}.
} \\
\label{eq:matching-memo-of-leo-effect-60}
& \myparbox{%
$\LHS{\Veim{bas}} = \LHS{\Veim{eff}}$
\becuz{}
\eqref{eq:matching-memo-of-leo-effect-58}.
} \\
\label{eq:matching-memo-of-leo-effect-62}
& \myparbox{%
$\Origin{\Veim{bas}} = \Origin{\Veim{eff}}$
\becuz{}
\eqref{eq:matching-memo-of-leo-effect-58}.
} \\
\label{eq:matching-memo-of-leo-effect-63}
& \myparbox{%
$\LSY{\Veim{bas}} = \LSY{\Veim{eff}}$
\becuz{}
\eqref{eq:matching-memo-of-leo-effect-60},
\eqref{eq:matching-memo-of-leo-effect-62}.
} \\
\label{eq:matching-memo-of-leo-effect-64}
& \myparbox{%
$\LSY{\Vleo{eff}} = \LSY{\Veim{bas}}$
\becuz{}
\eqref{eq:matching-memo-of-leo-effect-54},
\eqref{eq:matching-memo-of-leo-effect-63}.
} \\
\label{eq:matching-memo-of-leo-effect-68}
& \myparbox{%
\Vleo{eff} is the top-down cause of \Vleo{l}
\becuz{}
\eqref{eq:matching-memo-of-leo-effect-8h},
\eqref{eq:matching-memo-of-leo-effect-64},
\dref[Leo top-down cause]{def:down-cause-of-leo-memo}.
}
\intertext{%
And now,
using
the assumption for the conditional proof
\eqref{eq:matching-memo-of-leo-effect-50}
and 
\eqref{eq:matching-memo-of-leo-effect-68},
we have
Requirement 
\eqref{eq:matching-memo-of-leo-effect-5l}
for this theorem:
}
\notag
&
\begin{aligned}
& \exists \; \Vleo{eff} : \Memo{\Veim{eff}} = \Vleo{eff}
\\
& \qquad \implies \text{\Vleo{eff} is the top-down cause of \Vleo{l}}.
\end{aligned}
\end{align}

TODO: Finish.
\end{proof}


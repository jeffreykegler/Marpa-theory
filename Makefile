# Copyright 2012 Jeffrey Kegler
# This file is part of Marpa::R2.  Marpa::R2 is free software: you can
# redistribute it and/or modify it under the terms of the GNU Lesser
# General Public License as published by the Free Software Foundation,
# either version 3 of the License, or (at your option) any later version.
#
# Marpa::R2 is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
# Lesser General Public License for more details.
#
# You should have received a copy of the GNU Lesser
# General Public License along with Marpa::R2.  If not, see
# http://www.gnu.org/licenses/.

all: ah2002_notes.pdf recce.pdf

recce.pdf: recce.ltx recce.ind
	pdflatex $?

recce.ind: recce.idx
	makeindex recce
	
recce.idx: recce.ltx
	pdflatex $?
	mv recce.log recce.idx.log
	rm -f recce.pdf
	
ah2002_notes.pdf: ah2002_notes.ltx
	pdflatex $?

realclean: clean
	rm -f *.pdf

clean:
	rm -f *.log *.aux *.ilg *.idx *.ind *.toc *.dvi


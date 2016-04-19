# D3Lab
BigData  D3 Lab Assignment

Download	the	data	from https://s3.amazonaws.com/yubowenok/car.csv   
• Save	the	data	at	the	root	of	your	repo. 
– The	data	contains	392	cars	with	their	info	on	9	dimensions.
– Do	not	commit	the	data	to	GitHub!
• Render	an	interactive	scatterplot	of	the	data:
– Dimensions	 for	x-axis	and	y-axis	can	be	selected.
– Filtering	 on	MPG	is	supported.
– Hovered	car	name	is	shown	as	the	h4	header.



– Detailed	Requirements

• The	final	output	 shall	look	similar	to	the	snapshot	 from	the	previous	 slide.	Axes	
shall	be	properly	labeled	with	ticks,	and	dimension	 names.

• Your	must	use	JS	to	read	the	data	from	 car.csv located	on	the	server.	You	shall	not	
hard	code	the	data.

• Complete	the	dropdown	 lists	in	the	UI	div	for	selecting	the	data	dimensions	 to	be	
plotted	as	x-axis	and	y-axis.	

– Note	that	you	do	not	need	 to	include	 the	categorical	 dimensions	‘name’	and	‘origin’
– You	shall	 not	hard	code	the	dimensions.

• After	the	“Query	MPG”	button	is	pressed,	the	visualization	is	updated	to	render	
only	those	 cars	with	MPG	in	the	range	defined	 by	the	mpg-min,	mpg-max	input	
box.

• D3	rendering	 must	use	the	enter/exit/update	data	mapping.	You	shall	not	clear	the	
entire	svg every	time	before	rendering.

• When	the	mouse	hovers	a	scatterplot	point,	 the	"h 4"	header	is	updated	to	show	
the	hovered	car	name.

– You	do	not	need	to	worry	about	point	overlapping	 (some	points	cannot	be	hovered)

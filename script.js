function resumeFunc(){
	if (resume.style.visbility == 'visible') return;
	resume.style.visbility = 'visible';
	home.style.visbility = 'hidden';
	about.style.visbility = 'hidden';
	projects.style.visbility = 'hidden';
	contact.style.visbility = 'hidden';
	return;
}

function aboutFunc(){
	if (about.style.visbility == 'visible') return;
	resume.style.visbility = 'hidden';
	home.style.visbility = 'hidden';
	about.style.visbility = 'visible';
	projects.style.visbility = 'hidden';
	contact.style.visbility = 'hidden';
	return;
}

function contactFunc(){
	if (contact.style.visbility == 'visible') return;
	resume.style.visbility = 'hidden';
	home.style.visbility = 'hidden';
	about.style.visbility = 'hidden';
	projects.style.visbility = 'hidden';
	contact.style.visbility = 'visible';
	return;
}

function projectsFunc(){
	if (projects.style.visbility == 'visible') return;
	resume.style.visbility = 'hidden';
	home.style.visbility = 'hidden';
	about.style.visbility = 'hidden';
	projects.style.visbility = 'visible';
	contact.style.visbility = 'hidden';
	return;
}

function homeFunc(){
	if (home.style.visbility == 'visible') return;
	resume.style.visbility = 'hidden';
	home.style.visbility = 'visible';
	about.style.visbility = 'hidden';
	projects.style.visbility = 'hidden';
	contact.style.visbility = 'hidden';
	return;
}


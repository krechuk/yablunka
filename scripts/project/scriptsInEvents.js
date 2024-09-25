


const scriptsInEvents = {

	async Mainjs_Event1(runtime, localVars)
	{
		let initialHeight = window.innerHeight;
		
		window.addEventListener('resize', function() {
		    let newHeight = window.innerHeight;
		    if (newHeight < initialHeight) {
		        // Клавиатура открыта
		        document.getElementById('gameContainer').style.height = initialHeight + 'px';
		    } else {
		        // Клавиатура закрыта
		        document.getElementById('gameContainer').style.height = '100%';
		    }
		});
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;


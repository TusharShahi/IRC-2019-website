
		var dir = 1;
		//animation for side bar
		var slidein = function()
		{

			if(dir == 0)
				{ 	dir = 1;
				document.getElementById('sidebar').classList.remove('slideout');
					document.getElementById('sidebar').classList.add('slidein');
				 }
			else
			{	dir = 0;
				document.getElementById('sidebar').classList.remove('slidein');
				document.getElementById('sidebar').classList.add('slideout');
			}

		}

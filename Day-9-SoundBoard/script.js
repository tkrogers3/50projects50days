const sounds = [ 'applause', 'boo', 'gasp', 'tada', 'victory','wrong'];
//Sounds array for names on sounds and to label buttons.

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    //for each sound, create a button
    btn.classList.add('btn')
    //add a class name of btn to each element
    btn.innerText= sound 
    //label each button text with the sound name


    btn.addEventListener('click', ()=>{

        //add an event listener that when a click is made, a function is ran
        stopSongs()
        //the stopSong function runs to pause the current sound
        document.getElementById(sound).play()
        //selects the element clicked and plays the sound associated with that element.
    })
    document.getElementById('buttons').appendChild(btn);
    //appends each btn to the buttons element.


})  

function stopSongs(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound)
       //selects the sound assocaited with the element clicked.
        song.pause()
        //pauses sound 
        song.currentTime=0;
        //sets sound time to 0, so if you hit the button multiple times, it will reset the sound each button click.
    })
    }
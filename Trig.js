//Tigger.js
var scare : GameObject;
var played = false;
var trig = false;

var scareSound: AudioClip;
////////Make sure its not visable and reset////////
function Start () {
	trig = false;
	scare.renderer.enabled = false;
	}
/////When player enters trigger/////// set to true///////
function OnTriggerEnter (other : Collider) {
	trig = true;
}
//////Enable renderer and trigger sound and timer/////
function Update () {
	if (trig == true) {
		scare.renderer.enabled = true;
		removeovertime ();
		makehimscream ();
	}
}
//// timer ////
function removeovertime () {
	yield WaitForSeconds (0.8);
	scare.renderer.enabled = false;
	Destroy(this.gameObject);
	
}
//// sound /////
function makehimscream () {
	if (!played) {
		played = true;
		audio.PlayOneShot(scareSound);
	}
}


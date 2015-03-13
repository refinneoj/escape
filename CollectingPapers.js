
#pragma strict
@script RequireComponent ( AudioSource )
var papers : int = 0;
var papersToWin = 5;
var distanceToPaper : float = 2.5;
public var paperPickup : AudioClip;




function Start () 
{


	Screen.lockCursor = true;
}


function Update () 
{
	if(Input.GetMouseButtonDown (0) || Input.GetKeyDown (KeyCode.E))
	{
	var ray = Camera.main.ScreenPointToRay(Vector3(Screen.width * 0.5, Screen.height * 0.5, 0.0));
	var hit : RaycastHit;
	
	if(Physics.Raycast(ray, hit, distanceToPaper))
	{
	if(hit.collider.gameObject.name == "Paper")
	{
	 papers += 1;
	 GetComponent.<AudioSource>().PlayClipAtPoint(paperPickup, transform.position);
	 Destroy(hit.collider.gameObject);
	}
	}
	}
}


function OnGUI ()
{
	if(papers < papersToWin)
	{
	GUI.Box(Rect((Screen.width * 0.5) -60, 10, 120, 25),  " " + papers.ToString() + " papers");
	}
	else
	GUI.Box(Rect((Screen.width/2) - 100, 10, 200, 35), "All Papers Collected!");
}

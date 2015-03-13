using UnityEngine;
using System.Collections;

public class Menu : MonoBehaviour {

	public Texture backgroundTexture;
	
	void onGUI(){

		GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), backgroundTexture);
	
	}
}
	


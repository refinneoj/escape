#pragma strict
public class Pickup_Flashlight extends MonoBehaviour {
 
private var guiShow : boolean = false;
var rayLength = 4;
 
/* Flashlight SOUNDS in CLASS */
class FlashlightClass { 
var usePickupSound : boolean;
var PickupSound : AudioClip;
var FlashLightPlayer: GameObject;
}
var FlashlightC : FlashlightClass = new FlashlightClass ( ) ;
 
/* MAIN FUNCTION */
function Update()
{
    var Reticle : GUICrosshair = this.GetComponent(GUICrosshair);
    var FlashlightScript : FlashLight = FlashlightC.FlashLightPlayer.GetComponent(FlashLight);
    var hit : RaycastHit;
    var fwd = transform.TransformDirection(Vector3.forward);
     
    if(Physics.Raycast(transform.position, fwd, hit, rayLength))
    {
        if(hit.collider.gameObject.tag == "Flashlight")
        {
            guiShow = true;
            if(Input.GetKeyDown("e"))
            {
                FlashlightScript.enabled = true;
                hit.collider.gameObject.SetActive (false);
        if(FlashlightC.usePickupSound){
                this.audio.clip = FlashlightC.PickupSound;
                this.audio.Play();
        }
            guiShow = false;
        }
      }
    } 
     
    else
    {
        guiShow = false;
    }   
     
/* MAIN RETICLE USES */
    if(guiShow == true)
    {
        Reticle.m_UseReticle = true;
        Reticle.m_DefaultReticle = false;
    }
     
    if(guiShow == false)
    {
        Reticle.m_UseReticle = false;
        Reticle.m_DefaultReticle = true;
    }
  }
}

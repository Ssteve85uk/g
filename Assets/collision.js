#pragma strict

var damage : int = 50;
var distance : float;

function update()
{
if (Input.GetMouseButtonDown("fire1")
{
var hit : RaycastHit;
if (Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward),hit))
{
distance = hit.distance;
hit.transform.SendMessage("Apply Damage"),damage, SendMessageOptions.DontRequireReceiver);
}
}
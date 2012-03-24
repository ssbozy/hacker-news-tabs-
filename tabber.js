var idx;
var anchors = document.getElementsByTagName('a');
for (idx= 0; idx < anchors.length; ++idx)
{
    anchors[idx].setAttribute('target', '_blank');
}
setTimeout("location.reload(true);",60000);
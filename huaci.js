var iciba_huaci_url ="http://open.iciba.com/huaci/";
var ICIBA_HUAYI_Str = '';
var ICIBA_HUAYI_ALLOW = 1;
ICIBA_HUAYI_Str += '<link type="text/css" rel="stylesheet" href="'+iciba_huaci_url+'mini.css" />';
ICIBA_HUAYI_Str += '<div id="icIBahyI-yi" style="display:none"></div>';
ICIBA_HUAYI_Str += '<div id="icIBahyI-main_box" style="display:none">';
ICIBA_HUAYI_Str += '	<div class="icIBahyI-main_title" id="icIBahyI-main_title" >';

ICIBA_HUAYI_Str += '       love ciba';
ICIBA_HUAYI_Str += '       <div class="icIBahyI-sz_list" id="icIBahyI-sz_list">';
ICIBA_HUAYI_Str += '        	<a href="javascript:;">close</a>';
ICIBA_HUAYI_Str += '            <a href="#" target="_blank">xx</a>';
ICIBA_HUAYI_Str += '            <a href="#" style="border:none;" target="_blank">help</a>';
ICIBA_HUAYI_Str += '            <span class="icIBahyI-j icIBahyI-tl"></span>';
ICIBA_HUAYI_Str += '            <span class="icIBahyI-j icIBahyI-tr"></span>';
ICIBA_HUAYI_Str += '            <span class="icIBahyI-j icIBahyI-bl"></span>';
ICIBA_HUAYI_Str += '            <span class="icIBahyI-j icIBahyI-br"></span>';
ICIBA_HUAYI_Str += '        </div>';
ICIBA_HUAYI_Str += '    </div>';
ICIBA_HUAYI_Str += '    <div class="icIBahyI-search">';
ICIBA_HUAYI_Str += '        <input id="ICIBA_HUAYI_input" name="" type="text" onkeydown="ICIBA_HUAYI_KEYDOWN(event);">';
ICIBA_HUAYI_Str += '        <a href="javascript:;" class="icIBahyI-sear" onclick="ICIBA_HUAYI_searchword()" >Search</a>';
ICIBA_HUAYI_Str += '    </div>';
ICIBA_HUAYI_Str += ' <span class="icIBahyI-contTop"></span>';
ICIBA_HUAYI_Str += '    <div class="icIBahyI-loading" id="loading"> </div>';
ICIBA_HUAYI_Str += '    	<div class="icIBahyI-main_cont" id="icIBahyI-main_cont"></div>';
ICIBA_HUAYI_Str += ' <div class="icIBahyI-CB" id="icIBahyI-scbiframe" style="display:none"></div>';
ICIBA_HUAYI_Str += '    <span class="icIBahyI-contB"></span>';
ICIBA_HUAYI_Str += '</div>';

ICIBA_HUAYI_Str += '<object style="height:0px;width:0px;overflow:hidden;" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="0" height="0" id="asound_hanci" align="absmiddle">';
ICIBA_HUAYI_Str += '		<param name="allowScriptAccess" value="always" />';
ICIBA_HUAYI_Str += '       <param name="movie" value="http://www.iciba.com/top/asound.swf" />';
ICIBA_HUAYI_Str += '		<param name="quality" value="high" />';
ICIBA_HUAYI_Str += '		<embed src="http://www.iciba.com/top/asound.swf" quality="high" width="0" height="0" name="asound_hanci" align="absmiddle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
ICIBA_HUAYI_Str += '    </object>';
ICIBA_HUAYI_Str += ' <div class="icIBahyI-USER_LOGIN" id="icIBahyI-USER_LOGIN" style="display:none"></div>';
ICIBA_HUAYI_Str += '    <script src="'+iciba_huaci_url+'ICIBA_HUACI_COM.js" charset="utf-8" ></script>';
document.write(ICIBA_HUAYI_Str);

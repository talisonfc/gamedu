# gamedu
Jogo educacional para tese de mestrado +++++++++++

# Token para deploy
Token gamedu/2012020553

zipalign -v 4 app-release-unsigned.apk gamedu.apk

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/Documents/gamedu/gamedu.keystore app-release-unsigned.apk gamedu

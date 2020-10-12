#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

;
; \
; \\,
;  \\\,^,.,,.                    “Zero to Hero”
;  ,;7~((\))`;;,,               <zerotohero.dev>
;  ,(@') ;)`))\;;',    stay up to date, be curious: learn
;   )  . ),((  ))\;,
;  /;`,,/7),)) )) )\,,
; (& )`   (,((,((;( ))\,
;

; map CMD to CTRL because I am on a Windows VM.
LWin::LCtrl

+![::
{
SendInput {”}
}

return

+!]::
{
SendInput {’}
}

return

![::
{
SendInput {“}
}

return

!]::
{
SendInput {‘}
}

return

!-::
{
SendInput {–}
}

return

!+-::
{
SendInput {—}
}

return

!;::
{
SendInput {…}
}

return

@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\@npmcli\move-file\node_modules\mkdirp\bin\cmd.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\@npmcli\move-file\node_modules\mkdirp\bin\cmd.js" %*
)
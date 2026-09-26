{
  self,
  buildNpmPackage,
  nodejs,
}:
buildNpmPackage {
  pname = "portfolio";
  version = "v0.1";
  src = ./.;

  nativeBuildInputs = [
    nodejs
  ];

  npmDepsHash = "sha256-WX4PCWOpt1zZxkMqiwOMoE5nhmAG1pShh5hAF+xKdFI=";

  installPhase = ''
    runHook preInstall

    mkdir -p $out
    cp -r dist/* $out/

    runHook postInstall
  '';

  env = {
    COMMIT_HASH = self.shortRev or self.dirtyShortRev or "dirty";
    COMMIT_DATE =
      builtins.concatStringsSep
      "-" (builtins.match "(.{4})(.{2})(.{2}).*" self.lastModifiedDate);
  };
}

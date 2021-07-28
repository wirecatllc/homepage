with (import (import ./nix/sources.nix).nixpkgs) { config.allowUnfree = true; };
stdenv.mkDerivation {
  name = "node-devs";
  nativeBuildInputs = [ autoreconfHook autoPatchelfHook ];
  buildInputs = [ nodejs-12_x mozjpeg ];
}
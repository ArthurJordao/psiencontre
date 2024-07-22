{ pkgs, ... }:

{
  # https://devenv.sh/basics/
  env.GREET = "devenv";

  # https://devenv.sh/packages/
  packages = [ pkgs.git ];

  languages.javascript = {
    enable = true;
    pnpm = {
      enable = true;
      install = {
          enable = true;
        };
    };
  };

  services.postgres = {
    enable = true;
    initialScript = "CREATE USER postgres SUPERUSER;";
    listen_addresses = "127.0.0.1";
    initialDatabases = [
      { name = "psiencontre"; }
    ];
  };

  enterShell = ''
  echo "welcome to order  and eat app"
  '';

  # https://devenv.sh/languages/
  # languages.nix.enable = true;

  # https://devenv.sh/pre-commit-hooks/
  # pre-commit.hooks.shellcheck.enable = true;

  # https://devenv.sh/processes/
  # processes.ping.exec = "ping example.com";

  # See full reference at https://devenv.sh/reference/options/
}

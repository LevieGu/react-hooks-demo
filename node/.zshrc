# rewrite cd
function cd() {
    builtin cd "$1"
    n
}

# if use zsh-z
# update zsh-z config
export ZSHZ_CD="cd"
local option = vim.opt
local buffer = vim.b
local global = vim.g

-- Globol Settings --
-- show current mode, like insert --
option.showmode = false
option.backspace = { "indent", "eol", "start" }
-- tab config and indenr --
option.tabstop = 4
option.shiftwidth = 4
option.expandtab = true
option.shiftround = true
option.autoindent = true
option.smartindent = true
-- show line number --
option.number = true
option.relativenumber = true

option.wildmenu = true
-- close search result hightlight --
option.hlsearch = false
-- fuzzy search --
option.ignorecase = true
option.smartcase = true
-- auto completion --
option.completeopt = { "menuone", "noselect" }
-- hightline current line --
option.cursorline = true
option.termguicolors = true
option.signcolumn = "yes"
option.autoread = true
option.title = true
option.swapfile = false
option.backup = false
option.updatetime = 50
option.mouse = "a"
-- record undo --
option.undofile = true
option.undodir = vim.fn.expand('$HOME/.local/share/nvim/undo')

option.exrc = true
-- overflow --
option.wrap = true
-- open new file right show ---
option.splitright = true

-- Buffer Settings --
buffer.fileenconding = "utf-8"

-- Global Settings --
global.mapleader = " "

-- Key mappings --
vim.keymap.set({ "n", "i" }, "<Left>", "<Nop>")
vim.keymap.set({ "n", "i" }, "<Right>", "<Nop>")
vim.keymap.set({ "n", "i" }, "<Up>", "<Nop>")
vim.keymap.set({ "n", "i" }, "<Down>", "<Nop>")

-- select open file --
vim.keymap.set("n", "<A-Tab>", "<cmd>bNext<CR>")
-- close current file -- 
vim.keymap.set("n", "<leader>bc", "<cmd>bd<CR>")
-- move line --
vim.keymap.set("v", "J", ":m '>+1<CR>gv=gv")
vim.keymap.set("v", "K", ":m '<-2<CR>gv=gv")
-- copy --
vim.keymap.set({ "v", "n" }, "<leader>y", "\"+y")

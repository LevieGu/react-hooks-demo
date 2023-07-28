return {
    {
        "akinsho/bufferline.nvim",
        config = function()
            local bufferline = require('bufferline')
            bufferline.setup({
                options = {
                    style_preset = bufferline.style_preset.no_italic,
                }
            })
        end,
    },
    {
        "lukas-reineke/indent-blankline.nvim",
        config = true,
    },
    {
        "lewis6991/gitsigns.nvim",
        config = true,
    },
    {
        "RRethy/vim-illuminate",
        config = function()
            require('illuminate').configure()
        end
    },
}



/* @ THEME ACCENTS
 * Accents color settings
=========================================================================
This specific options define the accents color to be used in the general UI.
NOTE: This rulers must only override the original definitions */


/* LIME ACCENT
 * =================================================================== */

  // Tooltip

  {
    "class": "tool_tip_control",
    "settings": ["material_theme_accent_lime"],
    "layer0.tint": [139, 195, 74],
  },

  {
    "class": "tool_tip_label_control",
    "settings": ["material_theme_accent_lime"],
    "color": [255, 255, 255, 255]
  },

  // Sidebar tree highlight

  {
    "class": "tree_row",
    "settings": ["material_theme_accent_lime"],
    "layer1.texture": "Material Theme/assets/accent-lime/tree_highlight.png",
  },

    // Tabs

  {
    "class": "tab_control",
    "settings": ["material_theme_accent_lime"],
    "layer1.texture": "Material Theme/assets/accent-lime/tab_current.png",
  },

    // Tabs close button

  {
    "class": "tab_close_button",
    "settings": ["material_theme_accent_lime"],
    "layer1.texture": "Material Theme/assets/accent-lime/close_icon--hover.png",
    "layer3.texture": "Material Theme/assets/accent-lime/dirty_icon--hover.png"
  },

    // Opened files

  {
    "class": "close_button",
    "settings": ["material_theme_accent_lime"],
    "layer1.texture": "Material Theme/assets/accent-lime/close_icon--hover.png",
  },

    // Dirty opened files

  {
    "class": "close_button",
    "attributes": ["dirty"],
    "settings": ["material_theme_accent_lime"],
    "layer0.texture": "Material Theme/assets/accent-lime/dirty_icon--hover.png",
  },

  {
    "class": "sidebar_label",
    "settings": ["material_theme_accent_lime"],
    "parents": [{"class": "tree_row", "attributes": ["expanded"]}],
    "color": [139, 195, 74]
  },

  {
    "class": "icon_folder",
    "settings": ["material_theme_accent_lime"],
    "layer2.texture": "Material Theme/assets/accent-lime/folder--hover.png",
    "layer3.texture": "Material Theme/assets/accent-lime/folder_opened--hover.png",
  },

  {
    "class": "icon_folder",
    "settings": ["material_theme_accent_lime"],
    "parents": [{ "class": "tree_row", "attributes": ["expanded", "hover"] }],
    "layer3.texture":
    {
      "keyframes":
      [
        "Material Theme/assets/accent-lime/folder_opened--hover-0.png",
        "Material Theme/assets/accent-lime/folder_opened--hover-1.png",
        "Material Theme/assets/accent-lime/folder_opened--hover-2.png",
        "Material Theme/assets/accent-lime/folder_opened--hover-3.png",
        "Material Theme/assets/accent-lime/folder_opened--hover-4.png",
        "Material Theme/assets/accent-lime/folder_opened--hover-5.png",
        "Material Theme/assets/accent-lime/folder_opened--hover-5.png",
        "Material Theme/assets/accent-lime/folder_opened--hover-5.png",
        "Material Theme/assets/accent-lime/folder_opened--hover-6.png",
        "Material Theme/assets/accent-lime/folder_opened--hover-6.png",
        "Material Theme/assets/accent-lime/folder_opened--hover-6.png",
        "Material Theme/assets/accent-lime/folder_opened--hover-6.png",
        "Material Theme/assets/accent-lime/folder_opened--hover-7.png",
      ],
      "loop": false,
      "frame_time": 0.020,
    }
  },

    // Folder loading

  {
    "class": "icon_folder_loading",
    "settings": ["material_theme_accent_lime"],
    "layer1.texture":
    {
      "keyframes":
      [
        "Material Theme/assets/accent-lime/spinner7.png",
        "Material Theme/assets/accent-lime/spinner6.png",
        "Material Theme/assets/accent-lime/spinner5.png",
        "Material Theme/assets/accent-lime/spinner4.png",
        "Material Theme/assets/accent-lime/spinner3.png",
        "Material Theme/assets/accent-lime/spinner2.png",
        "Material Theme/assets/accent-lime/spinner1.png",
        "Material Theme/assets/accent-lime/spinner.png",
      ],
      "loop": true,
      "frame_time": 0.075,
    },
  },

    // tab set scroll left | scroll right

  {
    "class": "scroll_tabs_left_button",
    "settings": ["material_theme_accent_lime"],
    "layer1.texture": "Material Theme/assets/accent-lime/arrow_left--hover.png",
  },

  {
    "class": "scroll_tabs_right_button",
    "settings": ["material_theme_accent_lime"],
    "layer1.texture": "Material Theme/assets/accent-lime/arrow_right--hover.png",
  },


  {
    "class": "fold_button_control",
    "settings": ["material_theme_accent_lime"],
    "layer0.texture": "Material Theme/assets/commons/fold_right.png",
    "layer1.texture": "Material Theme/assets/accent-lime/fold_right--hover.png",
  },

  {
    "class": "fold_button_control",
    "attributes": ["expanded"],
    "settings": ["material_theme_accent_lime"],
    "layer0.texture": "Material Theme/assets/darker/fold_down.png",
    "layer1.texture": "Material Theme/assets/accent-lime/fold_down--hover.png"
  },

  // Panel labels

  {
    "class": "quick_panel_label",
    "settings": ["material_theme_accent_lime"],
    "fg": [176, 190, 197, 255],
    "match_fg": [139, 195, 74],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [139, 195, 74]
  },

    // Panel labels

  {
    "class": "quick_panel_label",
    "settings": ["material_theme_accent_lime"],
    "parents": [{"class": "overlay_control"}],
    "fg": [176, 190, 197, 255],
    "match_fg": [139, 195, 74],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [139, 195, 74]
  },

    // Panels sublabels

  {
    "class": "quick_panel_path_label",
    "settings": ["material_theme_accent_lime"],
    "fg": [97, 97, 97, 255],
    "match_fg": [139, 195, 74],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [139, 195, 74]
  },

    // Panels data / score

  {
    "class": "quick_panel_score_label",
    "settings": ["material_theme_accent_lime"],
    "fg": [139, 195, 74],
    "selected_fg": [255, 255, 255, 255]
  },

  {
    "class": "show_tabs_dropdown_button",
    "settings": ["material_theme_accent_lime"],
    "layer1.texture": "Material Theme/assets/accent-lime/overflow_menu--hover.png",
  },

    // Textline input oveflow menu

  {
    "class": "dropdown_button_control",
    "settings": ["material_theme_accent_lime"],
    "layer1.texture": "Material Theme/assets/accent-lime/overflow_menu--hover.png",
  },

  /* Buttons icons settings
  ===================================================================== */

    // Regex Icon
  {
    "class": "icon_regex",
    "settings": ["material_theme_accent_lime"],
    "layer0.texture": "Material Theme/assets/accent-lime/find_regex--hover.png",
  },

    // Preserve case sensitive

  {
    "class": "icon_case",
    "settings": ["material_theme_accent_lime"],
    "layer0.texture": "Material Theme/assets/accent-lime/find_case--hover.png",
  },
    // Wholeword

  {
    "class": "icon_whole_word",
    "settings": ["material_theme_accent_lime"],
    "layer0.texture": "Material Theme/assets/accent-lime/find_word--hover.png",
  },

    // Wrap

  {
    "class": "icon_wrap",
    "settings": ["material_theme_accent_lime"],
    "layer0.texture": "Material Theme/assets/accent-lime/find_wrap--hover.png",
  },

    // In selection

  {
    "class": "icon_in_selection",
    "settings": ["material_theme_accent_lime"],
    "layer0.texture": "Material Theme/assets/accent-lime/find_inselection--hover.png",
  },


    // Highlight Result

  {
    "class": "icon_highlight",
    "settings": ["material_theme_accent_lime"],
    "layer0.texture": "Material Theme/assets/accent-lime/find_highlight--hover.png",
  },

    // Preserve Case

  {
    "class": "icon_preserve_case",
    "settings": ["material_theme_accent_lime"],
    "layer0.texture": "Material Theme/assets/accent-lime/replace_preserve_case--hover.png",
  },

    // Show context

  {
    "class": "icon_context",
    "settings": ["material_theme_accent_lime"],
    "layer0.texture": "Material Theme/assets/accent-lime/find_context--hover.png",
  },

    // Use buffer

  {
    "class": "icon_use_buffer",
    "settings": ["material_theme_accent_lime"],
    "layer0.texture": "Material Theme/assets/accent-lime/use_buffer--hover.png",
  },

    // Reverse direction

  {
    "class": "icon_reverse",
    "settings": ["material_theme_accent_lime"],
    "layer0.texture": "Material Theme/assets/accent-lime/find_reverse--hover.png",
  },

/* PURPLE ACCENT
 * =================================================================== */

  // Tooltip

  {
    "class": "tool_tip_control",
    "settings": ["material_theme_accent_purple"],
    "layer0.tint": [156, 39, 176],
  },

  {
    "class": "tool_tip_label_control",
    "settings": ["material_theme_accent_purple"],
    "color": [255, 255, 255, 255]
  },

    // Sidebar tree highlight

  {
    "class": "tree_row",
    "settings": ["material_theme_accent_purple"],
    "layer1.texture": "Material Theme/assets/accent-purple/tree_highlight.png",
  },

    // Tabs

  {
    "class": "tab_control",
    "settings": ["material_theme_accent_purple"],
    "layer1.texture": "Material Theme/assets/accent-purple/tab_current.png",
  },

    // Tabs close button

  {
    "class": "tab_close_button",
    "settings": ["material_theme_accent_purple"],
    "layer1.texture": "Material Theme/assets/accent-purple/close_icon--hover.png",
    "layer3.texture": "Material Theme/assets/accent-purple/dirty_icon--hover.png"
  },

    // Opened files

  {
    "class": "close_button",
    "settings": ["material_theme_accent_purple"],
    "layer1.texture": "Material Theme/assets/accent-purple/close_icon--hover.png",
  },

    // Dirty opened files

  {
    "class": "close_button",
    "attributes": ["dirty"],
    "settings": ["material_theme_accent_purple"],
    "layer0.texture": "Material Theme/assets/accent-purple/dirty_icon--hover.png",
  },

  {
    "class": "sidebar_label",
    "settings": ["material_theme_accent_purple"],
    "parents": [{"class": "tree_row", "attributes": ["expanded"]}],
    "color": [171, 71, 188]
  },

  {
    "class": "icon_folder",
    "settings": ["material_theme_accent_purple"],
    "layer2.texture": "Material Theme/assets/accent-purple/folder--hover.png",
    "layer3.texture": "Material Theme/assets/accent-purple/folder_opened--hover.png",
  },

  {
    "class": "icon_folder",
    "settings": ["material_theme_accent_purple"],
    "parents": [{ "class": "tree_row", "attributes": ["expanded", "hover"] }],
    "layer3.texture":
    {
      "keyframes":
      [
        "Material Theme/assets/accent-purple/folder_opened--hover-0.png",
        "Material Theme/assets/accent-purple/folder_opened--hover-1.png",
        "Material Theme/assets/accent-purple/folder_opened--hover-2.png",
        "Material Theme/assets/accent-purple/folder_opened--hover-3.png",
        "Material Theme/assets/accent-purple/folder_opened--hover-4.png",
        "Material Theme/assets/accent-purple/folder_opened--hover-5.png",
        "Material Theme/assets/accent-purple/folder_opened--hover-5.png",
        "Material Theme/assets/accent-purple/folder_opened--hover-5.png",
        "Material Theme/assets/accent-purple/folder_opened--hover-6.png",
        "Material Theme/assets/accent-purple/folder_opened--hover-6.png",
        "Material Theme/assets/accent-purple/folder_opened--hover-6.png",
        "Material Theme/assets/accent-purple/folder_opened--hover-6.png",
        "Material Theme/assets/accent-purple/folder_opened--hover-7.png",
      ],
      "loop": false,
      "frame_time": 0.020,
    }
  },

    // Folder loading

  {
    "class": "icon_folder_loading",
    "settings": ["material_theme_accent_purple"],
    "layer1.texture":
    {
      "keyframes":
      [
        "Material Theme/assets/accent-purple/spinner7.png",
        "Material Theme/assets/accent-purple/spinner6.png",
        "Material Theme/assets/accent-purple/spinner5.png",
        "Material Theme/assets/accent-purple/spinner4.png",
        "Material Theme/assets/accent-purple/spinner3.png",
        "Material Theme/assets/accent-purple/spinner2.png",
        "Material Theme/assets/accent-purple/spinner1.png",
        "Material Theme/assets/accent-purple/spinner.png",
      ],
      "loop": true,
      "frame_time": 0.075,
    },
  },

    // tab set scroll left | scroll right

  {
    "class": "scroll_tabs_left_button",
    "settings": ["material_theme_accent_purple"],
    "layer1.texture": "Material Theme/assets/accent-purple/arrow_left--hover.png",
  },

  {
    "class": "scroll_tabs_right_button",
    "settings": ["material_theme_accent_purple"],
    "layer1.texture": "Material Theme/assets/accent-purple/arrow_right--hover.png",
  },


  {
    "class": "fold_button_control",
    "settings": ["material_theme_accent_purple"],
    "layer0.texture": "Material Theme/assets/commons/fold_right.png",
    "layer1.texture": "Material Theme/assets/accent-purple/fold_right--hover.png",
  },

  {
    "class": "fold_button_control",
    "attributes": ["expanded"],
    "settings": ["material_theme_accent_purple"],
    "layer0.texture": "Material Theme/assets/darker/fold_down.png",
    "layer1.texture": "Material Theme/assets/accent-purple/fold_down--hover.png"
  },

  // Panel labels

  {
    "class": "quick_panel_label",
    "settings": ["material_theme_accent_purple"],
    "fg": [176, 190, 197, 255],
    "match_fg": [156, 39, 176],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [156, 39, 176]
  },

    // Panel labels

  {
    "class": "quick_panel_label",
    "settings": ["material_theme_accent_purple"],
    "parents": [{"class": "overlay_control"}],
    "fg": [176, 190, 197, 255],
    "match_fg": [156, 39, 176],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [156, 39, 176]
  },

    // Panels sublabels

  {
    "class": "quick_panel_path_label",
    "settings": ["material_theme_accent_purple"],
    "fg": [97, 97, 97, 255],
    "match_fg": [156, 39, 176],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [156, 39, 176]
  },

    // Panels data / score

  {
    "class": "quick_panel_score_label",
    "settings": ["material_theme_accent_purple"],
    "fg": [156, 39, 176],
    "selected_fg": [255, 255, 255, 255]
  },

  {
    "class": "show_tabs_dropdown_button",
    "settings": ["material_theme_accent_purple"],
    "layer1.texture": "Material Theme/assets/accent-purple/overflow_menu--hover.png",
  },

    // Textline input oveflow menu

  {
    "class": "dropdown_button_control",
    "settings": ["material_theme_accent_purple"],
    "layer1.texture": "Material Theme/assets/accent-purple/overflow_menu--hover.png",
  },

  /* Buttons icons settings
  ===================================================================== */

    // Regex Icon
  {
    "class": "icon_regex",
    "settings": ["material_theme_accent_purple"],
    "layer0.texture": "Material Theme/assets/accent-purple/find_regex--hover.png",
  },

    // Preserve case sensitive

  {
    "class": "icon_case",
    "settings": ["material_theme_accent_purple"],
    "layer0.texture": "Material Theme/assets/accent-purple/find_case--hover.png",
  },
    // Wholeword

  {
    "class": "icon_whole_word",
    "settings": ["material_theme_accent_purple"],
    "layer0.texture": "Material Theme/assets/accent-purple/find_word--hover.png",
  },

    // Wrap

  {
    "class": "icon_wrap",
    "settings": ["material_theme_accent_purple"],
    "layer0.texture": "Material Theme/assets/accent-purple/find_wrap--hover.png",
  },

    // In selection

  {
    "class": "icon_in_selection",
    "settings": ["material_theme_accent_purple"],
    "layer0.texture": "Material Theme/assets/accent-purple/find_inselection--hover.png",
  },


    // Highlight Result

  {
    "class": "icon_highlight",
    "settings": ["material_theme_accent_purple"],
    "layer0.texture": "Material Theme/assets/accent-purple/find_highlight--hover.png",
  },

    // Preserve Case

  {
    "class": "icon_preserve_case",
    "settings": ["material_theme_accent_purple"],
    "layer0.texture": "Material Theme/assets/accent-purple/replace_preserve_case--hover.png",
  },

    // Show context

  {
    "class": "icon_context",
    "settings": ["material_theme_accent_purple"],
    "layer0.texture": "Material Theme/assets/accent-purple/find_context--hover.png",
  },

    // Use buffer

  {
    "class": "icon_use_buffer",
    "settings": ["material_theme_accent_purple"],
    "layer0.texture": "Material Theme/assets/accent-purple/use_buffer--hover.png",
  },

    // Reverse direction

  {
    "class": "icon_reverse",
    "settings": ["material_theme_accent_purple"],
    "layer0.texture": "Material Theme/assets/accent-purple/find_reverse--hover.png",
  },

/* RED ACCENT
 * =================================================================== */

    // Tooltip

  {
    "class": "tool_tip_control",
    "settings": ["material_theme_accent_red"],
    "layer0.tint": [229, 115, 115],
  },

  {
    "class": "tool_tip_label_control",
    "settings": ["material_theme_accent_red"],
    "color": [255, 255, 255, 255]
  },

    // Sidebar tree highlight

  {
    "class": "tree_row",
    "settings": ["material_theme_accent_red"],
    "layer1.texture": "Material Theme/assets/accent-red/tree_highlight.png",
  },

    // Tabs

  {
    "class": "tab_control",
    "settings": ["material_theme_accent_red"],
    "layer1.texture": "Material Theme/assets/accent-red/tab_current.png",
  },

    // Tabs close button

  {
    "class": "tab_close_button",
    "settings": ["material_theme_accent_red"],
    "layer1.texture": "Material Theme/assets/accent-red/close_icon--hover.png",
    "layer3.texture": "Material Theme/assets/accent-red/dirty_icon--hover.png"
  },

    // Opened files

  {
    "class": "close_button",
    "settings": ["material_theme_accent_red"],
    "layer1.texture": "Material Theme/assets/accent-red/close_icon--hover.png",
  },

    // Dirty opened files

  {
    "class": "close_button",
    "attributes": ["dirty"],
    "settings": ["material_theme_accent_red"],
    "layer0.texture": "Material Theme/assets/accent-red/dirty_icon--hover.png",
  },

  {
    "class": "sidebar_label",
    "settings": ["material_theme_accent_red"],
    "parents": [{"class": "tree_row", "attributes": ["expanded"]}],
    "color": [229, 115, 115]
  },

  {
    "class": "icon_folder",
    "settings": ["material_theme_accent_red"],
    "layer2.texture": "Material Theme/assets/accent-red/folder--hover.png",
    "layer3.texture": "Material Theme/assets/accent-red/folder_opened--hover.png",
  },

  {
    "class": "icon_folder",
    "settings": ["material_theme_accent_red"],
    "parents": [{ "class": "tree_row", "attributes": ["expanded", "hover"] }],
    "layer3.texture":
    {
      "keyframes":
      [
        "Material Theme/assets/accent-red/folder_opened--hover-0.png",
        "Material Theme/assets/accent-red/folder_opened--hover-1.png",
        "Material Theme/assets/accent-red/folder_opened--hover-2.png",
        "Material Theme/assets/accent-red/folder_opened--hover-3.png",
        "Material Theme/assets/accent-red/folder_opened--hover-4.png",
        "Material Theme/assets/accent-red/folder_opened--hover-5.png",
        "Material Theme/assets/accent-red/folder_opened--hover-5.png",
        "Material Theme/assets/accent-red/folder_opened--hover-5.png",
        "Material Theme/assets/accent-red/folder_opened--hover-6.png",
        "Material Theme/assets/accent-red/folder_opened--hover-6.png",
        "Material Theme/assets/accent-red/folder_opened--hover-6.png",
        "Material Theme/assets/accent-red/folder_opened--hover-6.png",
        "Material Theme/assets/accent-red/folder_opened--hover-7.png",
      ],
      "loop": false,
      "frame_time": 0.020,
    }
  },

    // Folder loading

  {
    "class": "icon_folder_loading",
    "settings": ["material_theme_accent_red"],
    "layer1.texture":
    {
      "keyframes":
      [
        "Material Theme/assets/accent-red/spinner7.png",
        "Material Theme/assets/accent-red/spinner6.png",
        "Material Theme/assets/accent-red/spinner5.png",
        "Material Theme/assets/accent-red/spinner4.png",
        "Material Theme/assets/accent-red/spinner3.png",
        "Material Theme/assets/accent-red/spinner2.png",
        "Material Theme/assets/accent-red/spinner1.png",
        "Material Theme/assets/accent-red/spinner.png",
      ],
      "loop": true,
      "frame_time": 0.075,
    },
  },

    // tab set scroll left | scroll right

  {
    "class": "scroll_tabs_left_button",
    "settings": ["material_theme_accent_red"],
    "layer1.texture": "Material Theme/assets/accent-red/arrow_left--hover.png",
  },

  {
    "class": "scroll_tabs_right_button",
    "settings": ["material_theme_accent_red"],
    "layer1.texture": "Material Theme/assets/accent-red/arrow_right--hover.png",
  },


  {
    "class": "fold_button_control",
    "settings": ["material_theme_accent_red"],
    "layer0.texture": "Material Theme/assets/commons/fold_right.png",
    "layer1.texture": "Material Theme/assets/accent-red/fold_right--hover.png",
  },

  {
    "class": "fold_button_control",
    "attributes": ["expanded"],
    "settings": ["material_theme_accent_red"],
    "layer0.texture": "Material Theme/assets/darker/fold_down.png",
    "layer1.texture": "Material Theme/assets/accent-red/fold_down--hover.png"
  },

  // Panel labels

  {
    "class": "quick_panel_label",
    "settings": ["material_theme_accent_red"],
    "fg": [176, 190, 197, 255],
    "match_fg": [244, 67, 54],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [229, 115, 115]
  },

    // Panel labels

  {
    "class": "quick_panel_label",
    "settings": ["material_theme_accent_red"],
    "parents": [{"class": "overlay_control"}],
    "fg": [176, 190, 197, 255],
    "match_fg": [229, 115, 115],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [229, 115, 115]
  },

    // Panels sublabels

  {
    "class": "quick_panel_path_label",
    "settings": ["material_theme_accent_red"],
    "fg": [97, 97, 97, 255],
    "match_fg": [229, 115, 115],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [229, 115, 115]
  },

    // Panels data / score

  {
    "class": "quick_panel_score_label",
    "settings": ["material_theme_accent_red"],
    "fg": [229, 115, 115],
    "selected_fg": [255, 255, 255, 255]
  },

  {
    "class": "show_tabs_dropdown_button",
    "settings": ["material_theme_accent_red"],
    "layer1.texture": "Material Theme/assets/accent-red/overflow_menu--hover.png",
  },

    // Textline input oveflow menu

  {
    "class": "dropdown_button_control",
    "settings": ["material_theme_accent_red"],
    "layer1.texture": "Material Theme/assets/accent-red/overflow_menu--hover.png",
  },

  /* Buttons icons settings
  ===================================================================== */

    // Regex Icon
  {
    "class": "icon_regex",
    "settings": ["material_theme_accent_red"],
    "layer0.texture": "Material Theme/assets/accent-red/find_regex--hover.png",
  },

    // Preserve case sensitive

  {
    "class": "icon_case",
    "settings": ["material_theme_accent_red"],
    "layer0.texture": "Material Theme/assets/accent-red/find_case--hover.png",
  },
    // Wholeword

  {
    "class": "icon_whole_word",
    "settings": ["material_theme_accent_red"],
    "layer0.texture": "Material Theme/assets/accent-red/find_word--hover.png",
  },

    // Wrap

  {
    "class": "icon_wrap",
    "settings": ["material_theme_accent_red"],
    "layer0.texture": "Material Theme/assets/accent-red/find_wrap--hover.png",
  },

    // In selection

  {
    "class": "icon_in_selection",
    "settings": ["material_theme_accent_red"],
    "layer0.texture": "Material Theme/assets/accent-red/find_inselection--hover.png",
  },


    // Highlight Result

  {
    "class": "icon_highlight",
    "settings": ["material_theme_accent_red"],
    "layer0.texture": "Material Theme/assets/accent-red/find_highlight--hover.png",
  },

    // Preserve Case

  {
    "class": "icon_preserve_case",
    "settings": ["material_theme_accent_red"],
    "layer0.texture": "Material Theme/assets/accent-red/replace_preserve_case--hover.png",
  },

    // Show context

  {
    "class": "icon_context",
    "settings": ["material_theme_accent_red"],
    "layer0.texture": "Material Theme/assets/accent-red/find_context--hover.png",
  },

    // Use buffer

  {
    "class": "icon_use_buffer",
    "settings": ["material_theme_accent_red"],
    "layer0.texture": "Material Theme/assets/accent-red/use_buffer--hover.png",
  },

    // Reverse direction

  {
    "class": "icon_reverse",
    "settings": ["material_theme_accent_red"],
    "layer0.texture": "Material Theme/assets/accent-red/find_reverse--hover.png",
  },

/* ORANGE ACCENT
 * =================================================================== */

    // Tooltip

  {
    "class": "tool_tip_control",
    "settings": ["material_theme_accent_orange"],
    "layer0.tint": [255, 112, 67],
  },

  {
    "class": "tool_tip_label_control",
    "settings": ["material_theme_accent_orange"],
    "color": [255, 255, 255, 255]
  },

    // Sidebar tree highlight

  {
    "class": "tree_row",
    "settings": ["material_theme_accent_orange"],
    "layer1.texture": "Material Theme/assets/accent-orange/tree_highlight.png",
  },

    // Tabs

  {
    "class": "tab_control",
    "settings": ["material_theme_accent_orange"],
    "layer1.texture": "Material Theme/assets/accent-orange/tab_current.png",
  },

    // Tabs close button

  {
    "class": "tab_close_button",
    "settings": ["material_theme_accent_orange"],
    "layer1.texture": "Material Theme/assets/accent-orange/close_icon--hover.png",
    "layer3.texture": "Material Theme/assets/accent-orange/dirty_icon--hover.png"
  },

    // Opened files

  {
    "class": "close_button",
    "settings": ["material_theme_accent_orange"],
    "layer1.texture": "Material Theme/assets/accent-orange/close_icon--hover.png",
  },

    // Dirty opened files

  {
    "class": "close_button",
    "attributes": ["dirty"],
    "settings": ["material_theme_accent_orange"],
    "layer0.texture": "Material Theme/assets/accent-orange/dirty_icon--hover.png",
  },

  {
    "class": "sidebar_label",
    "settings": ["material_theme_accent_orange"],
    "parents": [{"class": "tree_row", "attributes": ["expanded"]}],
    "color": [255, 112, 67]
  },

  {
    "class": "icon_folder",
    "settings": ["material_theme_accent_orange"],
    "layer2.texture": "Material Theme/assets/accent-orange/folder--hover.png",
    "layer3.texture": "Material Theme/assets/accent-orange/folder_opened--hover.png",
  },

  {
    "class": "icon_folder",
    "settings": ["material_theme_accent_orange"],
    "parents": [{ "class": "tree_row", "attributes": ["expanded", "hover"] }],
    "layer3.texture":
    {
      "keyframes":
      [
        "Material Theme/assets/accent-orange/folder_opened--hover-0.png",
        "Material Theme/assets/accent-orange/folder_opened--hover-1.png",
        "Material Theme/assets/accent-orange/folder_opened--hover-2.png",
        "Material Theme/assets/accent-orange/folder_opened--hover-3.png",
        "Material Theme/assets/accent-orange/folder_opened--hover-4.png",
        "Material Theme/assets/accent-orange/folder_opened--hover-5.png",
        "Material Theme/assets/accent-orange/folder_opened--hover-5.png",
        "Material Theme/assets/accent-orange/folder_opened--hover-5.png",
        "Material Theme/assets/accent-orange/folder_opened--hover-6.png",
        "Material Theme/assets/accent-orange/folder_opened--hover-6.png",
        "Material Theme/assets/accent-orange/folder_opened--hover-6.png",
        "Material Theme/assets/accent-orange/folder_opened--hover-6.png",
        "Material Theme/assets/accent-orange/folder_opened--hover-7.png",
      ],
      "loop": false,
      "frame_time": 0.020,
    }
  },

    // Folder loading

  {
    "class": "icon_folder_loading",
    "settings": ["material_theme_accent_orange"],
    "layer1.texture":
    {
      "keyframes":
      [
        "Material Theme/assets/accent-orange/spinner7.png",
        "Material Theme/assets/accent-orange/spinner6.png",
        "Material Theme/assets/accent-orange/spinner5.png",
        "Material Theme/assets/accent-orange/spinner4.png",
        "Material Theme/assets/accent-orange/spinner3.png",
        "Material Theme/assets/accent-orange/spinner2.png",
        "Material Theme/assets/accent-orange/spinner1.png",
        "Material Theme/assets/accent-orange/spinner.png",
      ],
      "loop": true,
      "frame_time": 0.075,
    },
  },

    // tab set scroll left | scroll right

  {
    "class": "scroll_tabs_left_button",
    "settings": ["material_theme_accent_orange"],
    "layer1.texture": "Material Theme/assets/accent-orange/arrow_left--hover.png",
  },

  {
    "class": "scroll_tabs_right_button",
    "settings": ["material_theme_accent_orange"],
    "layer1.texture": "Material Theme/assets/accent-orange/arrow_right--hover.png",
  },


  {
    "class": "fold_button_control",
    "settings": ["material_theme_accent_orange"],
    "layer0.texture": "Material Theme/assets/commons/fold_right.png",
    "layer1.texture": "Material Theme/assets/accent-orange/fold_right--hover.png",
  },

  {
    "class": "fold_button_control",
    "attributes": ["expanded"],
    "settings": ["material_theme_accent_orange"],
    "layer0.texture": "Material Theme/assets/darker/fold_down.png",
    "layer1.texture": "Material Theme/assets/accent-orange/fold_down--hover.png"
  },

  // Panel labels

  {
    "class": "quick_panel_label",
    "settings": ["material_theme_accent_orange"],
    "fg": [176, 190, 197, 255],
    "match_fg": [255, 112, 67],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [229, 115, 115]
  },

    // Panel labels

  {
    "class": "quick_panel_label",
    "settings": ["material_theme_accent_orange"],
    "parents": [{"class": "overlay_control"}],
    "fg": [176, 190, 197, 255],
    "match_fg": [255, 112, 67],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [229, 115, 115]
  },

    // Panels sublabels

  {
    "class": "quick_panel_path_label",
    "settings": ["material_theme_accent_orange"],
    "fg": [97, 97, 97, 255],
    "match_fg": [255, 112, 67],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [229, 115, 115]
  },

    // Panels data / score

  {
    "class": "quick_panel_score_label",
    "settings": ["material_theme_accent_orange"],
    "fg": [255, 112, 67],
    "selected_fg": [255, 255, 255, 255]
  },

  {
    "class": "show_tabs_dropdown_button",
    "settings": ["material_theme_accent_orange"],
    "layer1.texture": "Material Theme/assets/accent-orange/overflow_menu--hover.png",
  },

    // Textline input oveflow menu

  {
    "class": "dropdown_button_control",
    "settings": ["material_theme_accent_orange"],
    "layer1.texture": "Material Theme/assets/accent-orange/overflow_menu--hover.png",
  },

  /* Buttons icons settings
  ===================================================================== */

    // Regex Icon
  {
    "class": "icon_regex",
    "settings": ["material_theme_accent_orange"],
    "layer0.texture": "Material Theme/assets/accent-orange/find_regex--hover.png",
  },

    // Preserve case sensitive

  {
    "class": "icon_case",
    "settings": ["material_theme_accent_orange"],
    "layer0.texture": "Material Theme/assets/accent-orange/find_case--hover.png",
  },
    // Wholeword

  {
    "class": "icon_whole_word",
    "settings": ["material_theme_accent_orange"],
    "layer0.texture": "Material Theme/assets/accent-orange/find_word--hover.png",
  },

    // Wrap

  {
    "class": "icon_wrap",
    "settings": ["material_theme_accent_orange"],
    "layer0.texture": "Material Theme/assets/accent-orange/find_wrap--hover.png",
  },

    // In selection

  {
    "class": "icon_in_selection",
    "settings": ["material_theme_accent_orange"],
    "layer0.texture": "Material Theme/assets/accent-orange/find_inselection--hover.png",
  },


    // Highlight Result

  {
    "class": "icon_highlight",
    "settings": ["material_theme_accent_orange"],
    "layer0.texture": "Material Theme/assets/accent-orange/find_highlight--hover.png",
  },

    // Preserve Case

  {
    "class": "icon_preserve_case",
    "settings": ["material_theme_accent_orange"],
    "layer0.texture": "Material Theme/assets/accent-orange/replace_preserve_case--hover.png",
  },

    // Show context

  {
    "class": "icon_context",
    "settings": ["material_theme_accent_orange"],
    "layer0.texture": "Material Theme/assets/accent-orange/find_context--hover.png",
  },

    // Use buffer

  {
    "class": "icon_use_buffer",
    "settings": ["material_theme_accent_orange"],
    "layer0.texture": "Material Theme/assets/accent-orange/use_buffer--hover.png",
  },

    // Reverse direction

  {
    "class": "icon_reverse",
    "settings": ["material_theme_accent_orange"],
    "layer0.texture": "Material Theme/assets/accent-orange/find_reverse--hover.png",
  },

/* YELLOW ACCENT
 * =================================================================== */

    // Tooltip

  {
    "class": "tool_tip_control",
    "settings": ["material_theme_accent_yellow"],
    "layer0.tint": [255, 241, 118],
  },

  {
    "class": "tool_tip_label_control",
    "settings": ["material_theme_accent_yellow"],
    "color": [0, 0, 0, 150]
  },

    // Sidebar tree highlight

  {
    "class": "tree_row",
    "settings": ["material_theme_accent_yellow"],
    "layer1.texture": "Material Theme/assets/accent-yellow/tree_highlight.png",
  },

    // Tabs

  {
    "class": "tab_control",
    "settings": ["material_theme_accent_yellow"],
    "layer1.texture": "Material Theme/assets/accent-yellow/tab_current.png",
  },

    // Tabs close button

  {
    "class": "tab_close_button",
    "settings": ["material_theme_accent_yellow"],
    "layer1.texture": "Material Theme/assets/accent-yellow/close_icon--hover.png",
    "layer3.texture": "Material Theme/assets/accent-yellow/dirty_icon--hover.png"
  },

    // Opened files

  {
    "class": "close_button",
    "settings": ["material_theme_accent_yellow"],
    "layer1.texture": "Material Theme/assets/accent-yellow/close_icon--hover.png",
  },

    // Dirty opened files

  {
    "class": "close_button",
    "attributes": ["dirty"],
    "settings": ["material_theme_accent_yellow"],
    "layer0.texture": "Material Theme/assets/accent-yellow/dirty_icon--hover.png",
  },

  {
    "class": "sidebar_label",
    "settings": ["material_theme_accent_yellow"],
    "parents": [{"class": "tree_row", "attributes": ["expanded"]}],
    "color": [255, 241, 118]
  },

  {
    "class": "icon_folder",
    "settings": ["material_theme_accent_yellow"],
    "layer2.texture": "Material Theme/assets/accent-yellow/folder--hover.png",
    "layer3.texture": "Material Theme/assets/accent-yellow/folder_opened--hover.png",
  },

  {
    "class": "icon_folder",
    "settings": ["material_theme_accent_yellow"],
    "parents": [{ "class": "tree_row", "attributes": ["expanded", "hover"] }],
    "layer3.texture":
    {
      "keyframes":
      [
        "Material Theme/assets/accent-yellow/folder_opened--hover-0.png",
        "Material Theme/assets/accent-yellow/folder_opened--hover-1.png",
        "Material Theme/assets/accent-yellow/folder_opened--hover-2.png",
        "Material Theme/assets/accent-yellow/folder_opened--hover-3.png",
        "Material Theme/assets/accent-yellow/folder_opened--hover-4.png",
        "Material Theme/assets/accent-yellow/folder_opened--hover-5.png",
        "Material Theme/assets/accent-yellow/folder_opened--hover-5.png",
        "Material Theme/assets/accent-yellow/folder_opened--hover-5.png",
        "Material Theme/assets/accent-yellow/folder_opened--hover-6.png",
        "Material Theme/assets/accent-yellow/folder_opened--hover-6.png",
        "Material Theme/assets/accent-yellow/folder_opened--hover-6.png",
        "Material Theme/assets/accent-yellow/folder_opened--hover-6.png",
        "Material Theme/assets/accent-yellow/folder_opened--hover-7.png",
      ],
      "loop": false,
      "frame_time": 0.020,
    }
  },

    // Folder loading

  {
    "class": "icon_folder_loading",
    "settings": ["material_theme_accent_yellow"],
    "layer1.texture":
    {
      "keyframes":
      [
        "Material Theme/assets/accent-yellow/spinner7.png",
        "Material Theme/assets/accent-yellow/spinner6.png",
        "Material Theme/assets/accent-yellow/spinner5.png",
        "Material Theme/assets/accent-yellow/spinner4.png",
        "Material Theme/assets/accent-yellow/spinner3.png",
        "Material Theme/assets/accent-yellow/spinner2.png",
        "Material Theme/assets/accent-yellow/spinner1.png",
        "Material Theme/assets/accent-yellow/spinner.png",
      ],
      "loop": true,
      "frame_time": 0.075,
    },
  },

    // tab set scroll left | scroll right

  {
    "class": "scroll_tabs_left_button",
    "settings": ["material_theme_accent_yellow"],
    "layer1.texture": "Material Theme/assets/accent-yellow/arrow_left--hover.png",
  },

  {
    "class": "scroll_tabs_right_button",
    "settings": ["material_theme_accent_yellow"],
    "layer1.texture": "Material Theme/assets/accent-yellow/arrow_right--hover.png",
  },


  {
    "class": "fold_button_control",
    "settings": ["material_theme_accent_yellow"],
    "layer0.texture": "Material Theme/assets/commons/fold_right.png",
    "layer1.texture": "Material Theme/assets/accent-yellow/fold_right--hover.png",
  },

  {
    "class": "fold_button_control",
    "attributes": ["expanded"],
    "settings": ["material_theme_accent_yellow"],
    "layer0.texture": "Material Theme/assets/darker/fold_down.png",
    "layer1.texture": "Material Theme/assets/accent-yellow/fold_down--hover.png"
  },

  // Panel labels

  {
    "class": "quick_panel_label",
    "settings": ["material_theme_accent_yellow"],
    "fg": [176, 190, 197, 255],
    "match_fg": [255, 241, 118],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [229, 115, 115]
  },

    // Panel labels

  {
    "class": "quick_panel_label",
    "settings": ["material_theme_accent_yellow"],
    "parents": [{"class": "overlay_control"}],
    "fg": [176, 190, 197, 255],
    "match_fg": [255, 241, 118],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [229, 115, 115]
  },

    // Panels sublabels

  {
    "class": "quick_panel_path_label",
    "settings": ["material_theme_accent_yellow"],
    "fg": [97, 97, 97, 255],
    "match_fg": [255, 241, 118],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [229, 115, 115]
  },

    // Panels data / score

  {
    "class": "quick_panel_score_label",
    "settings": ["material_theme_accent_yellow"],
    "fg": [255, 241, 118],
    "selected_fg": [255, 255, 255, 255]
  },

  {
    "class": "show_tabs_dropdown_button",
    "settings": ["material_theme_accent_yellow"],
    "layer1.texture": "Material Theme/assets/accent-yellow/overflow_menu--hover.png",
  },

    // Textline input oveflow menu

  {
    "class": "dropdown_button_control",
    "settings": ["material_theme_accent_yellow"],
    "layer1.texture": "Material Theme/assets/accent-yellow/overflow_menu--hover.png",
  },

  /* Buttons icons settings
  ===================================================================== */

    // Regex Icon
  {
    "class": "icon_regex",
    "settings": ["material_theme_accent_yellow"],
    "layer0.texture": "Material Theme/assets/accent-yellow/find_regex--hover.png",
  },

    // Preserve case sensitive

  {
    "class": "icon_case",
    "settings": ["material_theme_accent_yellow"],
    "layer0.texture": "Material Theme/assets/accent-yellow/find_case--hover.png",
  },
    // Wholeword

  {
    "class": "icon_whole_word",
    "settings": ["material_theme_accent_yellow"],
    "layer0.texture": "Material Theme/assets/accent-yellow/find_word--hover.png",
  },

    // Wrap

  {
    "class": "icon_wrap",
    "settings": ["material_theme_accent_yellow"],
    "layer0.texture": "Material Theme/assets/accent-yellow/find_wrap--hover.png",
  },

    // In selection

  {
    "class": "icon_in_selection",
    "settings": ["material_theme_accent_yellow"],
    "layer0.texture": "Material Theme/assets/accent-yellow/find_inselection--hover.png",
  },


    // Highlight Result

  {
    "class": "icon_highlight",
    "settings": ["material_theme_accent_yellow"],
    "layer0.texture": "Material Theme/assets/accent-yellow/find_highlight--hover.png",
  },

    // Preserve Case

  {
    "class": "icon_preserve_case",
    "settings": ["material_theme_accent_yellow"],
    "layer0.texture": "Material Theme/assets/accent-yellow/replace_preserve_case--hover.png",
  },

    // Show context

  {
    "class": "icon_context",
    "settings": ["material_theme_accent_yellow"],
    "layer0.texture": "Material Theme/assets/accent-yellow/find_context--hover.png",
  },

    // Use buffer

  {
    "class": "icon_use_buffer",
    "settings": ["material_theme_accent_yellow"],
    "layer0.texture": "Material Theme/assets/accent-yellow/use_buffer--hover.png",
  },

    // Reverse direction

  {
    "class": "icon_reverse",
    "settings": ["material_theme_accent_yellow"],
    "layer0.texture": "Material Theme/assets/accent-yellow/find_reverse--hover.png",
  },


/* INDIGO ACCENT
 * =================================================================== */

  // Tooltip

  {
    "class": "tool_tip_control",
    "settings": ["material_theme_accent_indigo"],
    "layer0.tint": [92, 107, 192],
  },

  {
    "class": "tool_tip_label_control",
    "settings": ["material_theme_accent_indigo"],
    "color": [0, 0, 0, 150]
  },

    // Sidebar tree highlight

  {
    "class": "tree_row",
    "settings": ["material_theme_accent_indigo"],
    "layer1.texture": "Material Theme/assets/accent-indigo/tree_highlight.png",
  },

    // Tabs

  {
    "class": "tab_control",
    "settings": ["material_theme_accent_indigo"],
    "layer1.texture": "Material Theme/assets/accent-indigo/tab_current.png",
  },

    // Tabs close button

  {
    "class": "tab_close_button",
    "settings": ["material_theme_accent_indigo"],
    "layer1.texture": "Material Theme/assets/accent-indigo/close_icon--hover.png",
    "layer3.texture": "Material Theme/assets/accent-indigo/dirty_icon--hover.png"
  },

    // Opened files

  {
    "class": "close_button",
    "settings": ["material_theme_accent_indigo"],
    "layer1.texture": "Material Theme/assets/accent-indigo/close_icon--hover.png",
  },

    // Dirty opened files

  {
    "class": "close_button",
    "attributes": ["dirty"],
    "settings": ["material_theme_accent_indigo"],
    "layer0.texture": "Material Theme/assets/accent-indigo/dirty_icon--hover.png",
  },

  {
    "class": "sidebar_label",
    "settings": ["material_theme_accent_indigo"],
    "parents": [{"class": "tree_row", "attributes": ["expanded"]}],
    "color": [121, 134, 203]
  },

  {
    "class": "icon_folder",
    "settings": ["material_theme_accent_indigo"],
    "layer2.texture": "Material Theme/assets/accent-indigo/folder--hover.png",
    "layer3.texture": "Material Theme/assets/accent-indigo/folder_opened--hover.png",
  },

  {
    "class": "icon_folder",
    "settings": ["material_theme_accent_indigo"],
    "parents": [{ "class": "tree_row", "attributes": ["expanded", "hover"] }],
    "layer3.texture":
    {
      "keyframes":
      [
        "Material Theme/assets/accent-indigo/folder_opened--hover-0.png",
        "Material Theme/assets/accent-indigo/folder_opened--hover-1.png",
        "Material Theme/assets/accent-indigo/folder_opened--hover-2.png",
        "Material Theme/assets/accent-indigo/folder_opened--hover-3.png",
        "Material Theme/assets/accent-indigo/folder_opened--hover-4.png",
        "Material Theme/assets/accent-indigo/folder_opened--hover-5.png",
        "Material Theme/assets/accent-indigo/folder_opened--hover-5.png",
        "Material Theme/assets/accent-indigo/folder_opened--hover-5.png",
        "Material Theme/assets/accent-indigo/folder_opened--hover-6.png",
        "Material Theme/assets/accent-indigo/folder_opened--hover-6.png",
        "Material Theme/assets/accent-indigo/folder_opened--hover-6.png",
        "Material Theme/assets/accent-indigo/folder_opened--hover-6.png",
        "Material Theme/assets/accent-indigo/folder_opened--hover-7.png",
      ],
      "loop": false,
      "frame_time": 0.020,
    }
  },

    // Folder loading

  {
    "class": "icon_folder_loading",
    "settings": ["material_theme_accent_indigo"],
    "layer1.texture":
    {
      "keyframes":
      [
        "Material Theme/assets/accent-indigo/spinner7.png",
        "Material Theme/assets/accent-indigo/spinner6.png",
        "Material Theme/assets/accent-indigo/spinner5.png",
        "Material Theme/assets/accent-indigo/spinner4.png",
        "Material Theme/assets/accent-indigo/spinner3.png",
        "Material Theme/assets/accent-indigo/spinner2.png",
        "Material Theme/assets/accent-indigo/spinner1.png",
        "Material Theme/assets/accent-indigo/spinner.png",
      ],
      "loop": true,
      "frame_time": 0.075,
    },
  },

    // tab set scroll left | scroll right

  {
    "class": "scroll_tabs_left_button",
    "settings": ["material_theme_accent_indigo"],
    "layer1.texture": "Material Theme/assets/accent-indigo/arrow_left--hover.png",
  },

  {
    "class": "scroll_tabs_right_button",
    "settings": ["material_theme_accent_indigo"],
    "layer1.texture": "Material Theme/assets/accent-indigo/arrow_right--hover.png",
  },


  {
    "class": "fold_button_control",
    "settings": ["material_theme_accent_indigo"],
    "layer0.texture": "Material Theme/assets/commons/fold_right.png",
    "layer1.texture": "Material Theme/assets/accent-indigo/fold_right--hover.png",
  },

  {
    "class": "fold_button_control",
    "attributes": ["expanded"],
    "settings": ["material_theme_accent_indigo"],
    "layer0.texture": "Material Theme/assets/darker/fold_down.png",
    "layer1.texture": "Material Theme/assets/accent-indigo/fold_down--hover.png"
  },

  // Panel labels

  {
    "class": "quick_panel_label",
    "settings": ["material_theme_accent_indigo"],
    "fg": [176, 190, 197, 255],
    "match_fg": [121, 134, 203],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [121, 134, 203]
  },

    // Panel labels

  {
    "class": "quick_panel_label",
    "settings": ["material_theme_accent_indigo"],
    "parents": [{"class": "overlay_control"}],
    "fg": [176, 190, 197, 255],
    "match_fg": [121, 134, 203],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [121, 134, 203]
  },

    // Panels sublabels

  {
    "class": "quick_panel_path_label",
    "settings": ["material_theme_accent_indigo"],
    "fg": [97, 97, 97, 255],
    "match_fg": [121, 134, 203],
    "selected_fg": [255, 255, 255, 255],
    "selected_match_fg": [121, 134, 203]
  },

    // Panels data / score

  {
    "class": "quick_panel_score_label",
    "settings": ["material_theme_accent_indigo"],
    "fg": [121, 134, 203],
    "selected_fg": [255, 255, 255, 255]
  },

  {
    "class": "show_tabs_dropdown_button",
    "settings": ["material_theme_accent_indigo"],
    "layer1.texture": "Material Theme/assets/accent-indigo/overflow_menu--hover.png",
  },

    // Textline input oveflow menu

  {
    "class": "dropdown_button_control",
    "settings": ["material_theme_accent_indigo"],
    "layer1.texture": "Material Theme/assets/accent-indigo/overflow_menu--hover.png",
  },

  /* Buttons icons settings
  ===================================================================== */

    // Regex Icon
  {
    "class": "icon_regex",
    "settings": ["material_theme_accent_indigo"],
    "layer0.texture": "Material Theme/assets/accent-indigo/find_regex--hover.png",
  },

    // Preserve case sensitive

  {
    "class": "icon_case",
    "settings": ["material_theme_accent_indigo"],
    "layer0.texture": "Material Theme/assets/accent-indigo/find_case--hover.png",
  },
    // Wholeword

  {
    "class": "icon_whole_word",
    "settings": ["material_theme_accent_indigo"],
    "layer0.texture": "Material Theme/assets/accent-indigo/find_word--hover.png",
  },

    // Wrap

  {
    "class": "icon_wrap",
    "settings": ["material_theme_accent_indigo"],
    "layer0.texture": "Material Theme/assets/accent-indigo/find_wrap--hover.png",
  },

    // In selection

  {
    "class": "icon_in_selection",
    "settings": ["material_theme_accent_indigo"],
    "layer0.texture": "Material Theme/assets/accent-indigo/find_inselection--hover.png",
  },


    // Highlight Result

  {
    "class": "icon_highlight",
    "settings": ["material_theme_accent_indigo"],
    "layer0.texture": "Material Theme/assets/accent-indigo/find_highlight--hover.png",
  },

    // Preserve Case

  {
    "class": "icon_preserve_case",
    "settings": ["material_theme_accent_indigo"],
    "layer0.texture": "Material Theme/assets/accent-indigo/replace_preserve_case--hover.png",
  },

    // Show context

  {
    "class": "icon_context",
    "settings": ["material_theme_accent_indigo"],
    "layer0.texture": "Material Theme/assets/accent-indigo/find_context--hover.png",
  },

    // Use buffer

  {
    "class": "icon_use_buffer",
    "settings": ["material_theme_accent_indigo"],
    "layer0.texture": "Material Theme/assets/accent-indigo/use_buffer--hover.png",
  },

    // Reverse direction

  {
    "class": "icon_reverse",
    "settings": ["material_theme_accent_indigo"],
    "layer0.texture": "Material Theme/assets/accent-indigo/find_reverse--hover.png",
  },

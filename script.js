headings = [ // {{{
    "Quantum Mechanics",
] // }}}

script = function(){ return [ // {{{
    // Quantum Mechanics {{{
    "quantum",
    hireUseActor("left_cat","standard_backdrop_top"),
    hireUseActor("right_cat","left_cat"),
    hireUseActor("bottom_cat","right_cat"),
    hireUseActor("top_cat","bottom_cat"),
    set("left_cat","x",-400),
    set("right_cat","x",400),
    set("top_cat","y",-400),
    set("bottom_cat","y",400),
    parallel(
        decelerate(0.5,"left_cat","x",0),
        decelerate(0.5,"right_cat","x",0),
        decelerate(0.5,"bottom_cat","y",0),
        decelerate(0.5,"top_cat","y",0)
    ),
    "",
    hireUseActor("center_cat"),
    set("center_cat","scale",0),
    set("center_cat","cx",512.943),
    set("center_cat","cy",318.6725+150),
    linear(0.5,"center_cat","scale",1),
    "",
    hireUseActor("center_cat_cover","center_cat"),
    fadeOutAndFire(0.5,
        "top_cat",
        "bottom_cat",
        "left_cat",
        "right_cat",
        "center_cat",
        "center_cat_cover"
    ),
    // }}}
    "Introducing the cats",
    hireAndFadeIn(0.5,"cat_in_box_awake"),
    "",
    hireAndFadeIn(0.5,"cat_in_box_asleep"),
    "",
    hireAndFadeIn(0.5,"array_awake"),
    "",
    hireAndFadeIn(0.5,"array_asleep"),
    "",
]} // }}}

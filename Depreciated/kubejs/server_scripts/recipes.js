/*
  Copyright 2023 Kerberus. All rights reserved.
*/
onEvent('recipes', event => {
    event.remove({ output: 'cagedmobs:hoppingmobcage' }) // Removed for balancing reasons.
})
// Dragoncraft Server Scripts
// Remove broken/phantom recipes that spam errors on load

ServerEvents.recipes(event => {
  // Create Things and Misc - references deleted_mod_element
  event.remove({ id: 'create_things_and_misc:schematic_chair' })
  event.remove({ id: 'create_things_and_misc:copper_scaffolding_craft' })

  // CreateDeco - broken placard recipe (no key id)
  event.remove({ id: 'createdeco:placard' })

  // Brewin and Chewin - mod not installed, recipe serializer missing
  event.remove({ mod: 'brewinandchewin' })

  // Malum - broken spirit_repair recipes for Hexerei (wrong format)
  event.remove({ id: 'malum:malum/spirit_repair/hexerei/broom' })
  event.remove({ id: 'malum:malum/spirit_repair/hexerei/witch_armor' })

  // Malum - broken Create milling compat (wrong output format)
  event.remove({ id: 'malum:create/milling/grim_talc' })

  // Create x BWG compat - BWG removed/renamed items that Create still references
  event.remove({ id: /^create:.*compat\/biomeswevegone/ })

  // Toxony - alchemical_forge plaguebringer recipes use wrong format for ingredients
  event.remove({ id: /^toxony:alchemical_forge\/plaguebringer/ })

  // Epic Knights Addon - broken silvering/smithing recipes with empty ingredients
  event.remove({ id: /^magistuarmoryaddon:silvered_/ })
  event.remove({ id: 'magistuarmoryaddon:silver_necklace_decoration' })

  // Ender's Delight - broken chorus_pie_slice recipe (no key "item", uses "id" instead)
  event.remove({ id: 'endersdelight:chorus_pie_slice' })
})

/*
  Copyright 2023 Kerberus. All rights reserved.
*/

onEvent('player.logged_in', event => {
		
    if (!event.player.stages.has('starter_kit')) {

    event.player.stages.add('starter_kit')
	
    event.player.inventory.set(0, 'minecraft:iron_sword')
    event.player.inventory.set(1, Item.of('minecraft:cookie', 16, "{HideFlags:3,display:{Lore:['[{\"text\":\"In a celestial realm, the divine Butterian crafted \\\\\"Mr. Butter\\'s Cookies\\\\\" with stardust and love. These treats shimmered with magic, granting joy and fulfilling wishes for the pure-hearted.\",\"italic\":false}]'],Name:'[{\"text\":\"Butter\\'s Cookies\",\"italic\":false,\"color\":\"dark_blue\",\"bold\":true}]'}}").enchant('', 0))
    event.player.inventory.set(8, 'minecraft:painting')
	
    event.player.setHeadArmorItem('minecraft:iron_helmet')
    event.player.setChestArmorItem('minecraft:iron_chestplate')
    event.player.setLegsArmorItem('minecraft:iron_leggings')
    event.player.setFeetArmorItem('minecraft:iron_boots')
    event.player.setOffHandItem(Item.of('minecraft:shield', '{BlockEntityTag:{Base:0,Patterns:[{Color:13,Pattern:"hhb"},{Color:5,Pattern:"ms"},{Color:4,Pattern:"hh"},{Color:1,Pattern:"ts"},{Color:11,Pattern:"bs"},{Color:10,Pattern:"bts"},{Color:14,Pattern:"tts"},{Color:7,Pattern:"bri"}]},Damage:0}'))
    }
})

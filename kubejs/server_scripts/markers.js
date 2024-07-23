/*
  Copyright 2023 Kerberus. All rights reserved.
*/
onEvent("server.load", event =>{
    event.server.schedule(15 * MINUTE, (e) => {
        event.server.runCommandSilent("kill @e[type=minecraft:marker]")
        e.reschedule()
    })
})
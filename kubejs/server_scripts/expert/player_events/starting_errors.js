PlayerEvents.loggedIn((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const twilight_portal = Java.loadClass('twilightforest.block.TFPortalBlock');
    const { player, level, server } = event;

    if (player.stages.has('starting_errors') && !player.stages.has('starting_errors_corrected')) {
        // Second load detected, Twilight should be available so send them there.
        twilight_portal.attemptSendEntity(player, true, false);
        player.stages.add('starting_errors_corrected');
    }

    if (!player.stages.has('starting_errors')) {
        // First load detected, kick the player with a message to rejoin.
        player.stages.add('starting_errors');

        if (String(level.getDimension()) == 'minecraft:overworld') {
            let username = player.getUsername();
            let command = `/kick ${username} An issue was detected with your world start! Please join the world again to correct it.`;
            server.runCommandSilent(command);
        }
    }
});

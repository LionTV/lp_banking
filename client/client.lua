RegisterNetEvent('lp_svelteTest:show_Interface')
AddEventHandler('lp_svelteTest:show_Interface', function()
    SendNUIMessage({
        type = 'showInterface'
    })
end)

RegisterNetEvent('lp_svelteTest:hide_Interface')
AddEventHandler('lp_svelteTest:hide_Interface', function()
    SendNUIMessage({
        type = 'hideInterface'
    })
end)

--Test commands-----------------------------

RegisterCommand('showUI', function()
    TriggerEvent('lp_svelteTest:show_Interface')
end)

RegisterCommand('hideUI', function()
    TriggerEvent('lp_svelteTest:hide_Interface')
end)

-- TriggerEvent('lp_svelteTest:show_Interface') to trigger the UI


-- TriggerEvent('lp_svelteTest:hide_Interface') to hide it
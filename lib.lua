local Rayfield = loadstring(game:HttpGet('https://raw.githubusercontent.com/shlexware/Rayfield/main/source'))()

local Window = Rayfield:CreateWindow({
	Name = "Counter Blox Aim Tools",
	LoadingTitle = "By Bav",
	LoadingSubtitle = "Nhà Phát Hành Khuyến Cáo: Hạn Chế Dùng Hack !",
	KeySystem = true, -- Set this to true to use our key system
	KeySettings = {
		Title = "Counter Blox Aim Tools",
		Subtitle = "Redeem You key",
		Note = "Lưu Ý: Không nên quá lạm dùng vào hack !",
		FileName = "Counter",
		SaveKey = false,
		GrabKeyFromSite = false, -- If this is true, set Key below to the RAW site you would like Rayfield to get the key from
		Key = "@bavnguyencoder"
	}
})
local Tab = Window:CreateTab("Main", 5777075128) -- Title, Image


local Section = Tab:CreateSection("Aimcount")
local Label = Tab:CreateLabel("Tools Version: 1.0")
local Label = Tab:CreateLabel("Tools Owner: @BavNguyen")
local Button = Tab:CreateButton({
	Name = "Feture ( FOV Hidden )",
	Callback = function()
        Rayfield:Notify({
            Title = "Feture ( 1 )",
            Content = "Succsesfuly !",
            Duration = 4.5,
            Image = 6967081092,
        })

        if getgenv().ValiantAimHacks then return getgenv().ValiantAimHacks end

-- // Services
local Players = game:GetService("Players")
local Workspace = game:GetService("Workspace")
local GuiService = game:GetService("GuiService")
local RunService = game:GetService("RunService")

-- // Vars
local Heartbeat = RunService.Heartbeat
local LocalPlayer = Players.LocalPlayer
local CurrentCamera = Workspace.CurrentCamera
local Mouse = LocalPlayer:GetMouse()

-- // Optimisation Vars (ugly)
local Drawingnew = Drawing.new
local Color3fromRGB = Color3.fromRGB
local Vector2new = Vector2.new
local GetGuiInset = GuiService.GetGuiInset
local Randomnew = Random.new
local mathfloor = math.floor
local CharacterAdded = LocalPlayer.CharacterAdded
local CharacterAddedWait = CharacterAdded.Wait
local WorldToViewportPoint = CurrentCamera.WorldToViewportPoint
local RaycastParamsnew = RaycastParams.new
local EnumRaycastFilterTypeBlacklist = Enum.RaycastFilterType.Blacklist
local Raycast = Workspace.Raycast
local GetPlayers = Players.GetPlayers
local Instancenew = Instance.new
local IsDescendantOf = Instancenew("Part").IsDescendantOf
local FindFirstChildWhichIsA = Instancenew("Part").FindFirstChildWhichIsA
local FindFirstChild = Instancenew("Part").FindFirstChild

-- // Silent Aim Vars
getgenv().ValiantAimHacks = {
    SilentAimEnabled = true,
    ShowFOV = false,
    FOVSides = 12,
    VisibleCheck = true,
    TeamCheck = true,
    FOV = 45,
    HitChance = 100,
    Selected = LocalPlayer,
    SelectedPart = nil,
    TargetPart = {"Head", "HumanoidRootPart"},
    BlacklistedTeams = {
        {
            Team = LocalPlayer.Team,
            TeamColor = LocalPlayer.TeamColor,
        },
    },
    BlacklistedPlayers = {LocalPlayer},
    WhitelistedPUIDs = {91318356},
}
local ValiantAimHacks = getgenv().ValiantAimHacks

-- // Show FOV
local circle = Drawingnew("Circle")
circle.Transparency = 1
circle.Thickness = 2
circle.Color = Color3fromRGB(255, 255, 255)
circle.Filled = false
function ValiantAimHacks.updateCircle()
    if (circle) then
        -- // Set Circle Properties
        circle.Visible = ValiantAimHacks.ShowFOV
        circle.Radius = (ValiantAimHacks.FOV * 3)
        circle.Position = Vector2new(Mouse.X, Mouse.Y + GetGuiInset(GuiService).Y)
        circle.NumSides = ValiantAimHacks.FOVSides

        -- // Return circle
        return circle
    end
end

-- // Custom Functions
local calcChance = function(percentage)
    percentage = mathfloor(percentage)
    local chance = mathfloor(Randomnew().NextNumber(Randomnew(), 0, 1) * 100) / 100
    return chance <= percentage / 100
end

-- // Customisable Checking Functions: Is a part visible
function ValiantAimHacks.isPartVisible(Part, PartDescendant)
    -- // Vars
    local Character = LocalPlayer.Character or CharacterAddedWait(CharacterAdded)
    local Origin = CurrentCamera.CFrame.Position
    local _, OnScreen = WorldToViewportPoint(CurrentCamera, Part.Position)

    -- // If Part is on the screen
    if (OnScreen) then
        -- // Vars: Calculating if is visible
        local raycastParams = RaycastParamsnew()
        raycastParams.FilterType = EnumRaycastFilterTypeBlacklist
        raycastParams.FilterDescendantsInstances = {Character, CurrentCamera}

        local Result = Raycast(Workspace, Origin, Part.Position - Origin, raycastParams)
        if (Result) then
            local PartHit = Result.Instance
            local Visible = (not PartHit or IsDescendantOf(PartHit, PartDescendant))

            -- // Return
            return Visible
        end
    end

    -- // Return
    return false
end

-- // Check teams
function ValiantAimHacks.checkTeam(targetPlayerA, targetPlayerB)
    -- // If player is not on your team
    if (targetPlayerA.Team ~= targetPlayerB.Team) then

        -- // Check if team is blacklisted
        for i = 1, #ValiantAimHacks.BlacklistedTeams do
            local v = ValiantAimHacks.BlacklistedTeams

            if (targetPlayerA.Team ~= v.Team and targetPlayerA.TeamColor ~= v.TeamColor) then
                return true
            end
        end
    end

    -- // Return
    return false
end

-- // Check if player is blacklisted
function ValiantAimHacks.checkPlayer(targetPlayer)
    for i = 1, #ValiantAimHacks.BlacklistedPlayers do
        local v = ValiantAimHacks.BlacklistedPlayers[i]

        if (v ~= targetPlayer) then
            return true
        end
    end

    -- // Return
    return false
end

-- // Check if player is whitelisted
function ValiantAimHacks.checkWhitelisted(targetPlayer)
    for i = 1, #ValiantAimHacks.WhitelistedPUIDs do
        local v = ValiantAimHacks.WhitelistedPUIDs[i]

        if (targetPlayer.UserId == v) then
            return true
        end
    end

    -- // Return
    return false
end

-- // Blacklist player
function ValiantAimHacks.BlacklistPlayer(Player)
    local BlacklistedPlayers = ValiantAimHacks.BlacklistedPlayers

    -- // Find player in table
    for i = 1, #BlacklistedPlayers do
        local BlacklistedPlayer = BlacklistedPlayers[i]

        if (BlacklistedPlayer == Player) then
            return false
        end
    end

    -- // Blacklist player
    BlacklistedPlayers[#BlacklistedPlayers + 1] = Player
    return true
end

-- // Unblacklist Player
function ValiantAimHacks.UnblacklistPlayer(Player)
    local BlacklistedPlayers = ValiantAimHacks.BlacklistedPlayers

    -- // Find player in table
    for i = 1, #BlacklistedPlayers do
        local BlacklistedPlayer = BlacklistedPlayers[i]

        if (BlacklistedPlayer == Player) then
            table.remove(BlacklistedPlayer, i)
            return true
        end
    end

    -- //
    return false
end

-- // Whitelist player
function ValiantAimHacks.WhitelistPlayer(PlayerId)
    local WhitelistedPUIDs = ValiantAimHacks.WhitelistedPUIDs

    -- // Find player in table
    for i = 1, #WhitelistedPUIDs do
        local WhitelistedPUID = WhitelistedPUIDs[i]

        if (WhitelistedPUID == PlayerId) then
            return false
        end
    end

    -- // Whitelist player
    WhitelistedPUIDs[#WhitelistedPUIDs + 1] = PlayerId
    return true
end

-- // Unwhitelist Player
function ValiantAimHacks.UnwhitelistPlayer(PlayerId)
    local WhitelistedPUIDs = ValiantAimHacks.WhitelistedPUIDs

    -- // Find player in table
    for i = 1, #WhitelistedPUIDs do
        local WhitelistedPUID = WhitelistedPUIDs[i]

        if (WhitelistedPUID == PlayerId) then
            table.remove(WhitelistedPUID, i)
            return true
        end
    end

    -- //
    return false
end

-- // Get the Direction, Normal and Material
function ValiantAimHacks.findDirectionNormalMaterial(Origin, Destination, UnitMultiplier)
    if (typeof(Origin) == "Vector3" and typeof(Destination) == "Vector3") then
        -- // Handling
        if (not UnitMultiplier) then UnitMultiplier = 1 end

        -- // Vars
        local Direction = (Destination - Origin).Unit * UnitMultiplier
        local RaycastResult = Raycast(Workspace, Origin, Direction)

        if (RaycastResult ~= nil) then
            local Normal = RaycastResult.Normal
            local Material = RaycastResult.Material

            return Direction, Normal, Material
        end
    end

    -- // Return
    return nil
end

-- // Get Character
function ValiantAimHacks.getCharacter(Player)
    return Player.Character
end

-- // Check Health
function ValiantAimHacks.checkHealth(Player)
    local Character = ValiantAimHacks.getCharacter(Player)
    local Humanoid = FindFirstChildWhichIsA(Character, "Humanoid")

    local Health = (Humanoid and Humanoid.Health or 0)
    return Health > 0
end

-- // Check if silent aim can used
function ValiantAimHacks.checkSilentAim()
    return (ValiantAimHacks.SilentAimEnabled == true and ValiantAimHacks.Selected ~= LocalPlayer and ValiantAimHacks.SelectedPart ~= nil)
end

-- // Get Closest Target Part
function ValiantAimHacks.getClosestTargetPartToCursor(Character)
    local TargetParts = ValiantAimHacks.TargetPart

    -- // Vars
    local ClosestPart = nil
    local ClosestPartPosition = nil
    local ClosestPartOnScreen = false
    local ClosestPartMagnitudeFromMouse = nil
    local ShortestDistance = 1/0

    -- //
    local function checkTargetPart(TargetPartName)
        local TargetPart = FindFirstChild(Character, TargetPartName)

        if (TargetPart) then
            local PartPos, onScreen = WorldToViewportPoint(CurrentCamera, TargetPart.Position)
            local Magnitude = (Vector2new(PartPos.X, PartPos.Y) - Vector2new(Mouse.X, Mouse.Y)).Magnitude

            if (Magnitude < ShortestDistance) then
                ClosestPart = TargetPart
                ClosestPartPosition = PartPos
                ClosestPartOnScreen = onScreen
                ClosestPartMagnitudeFromMouse = Magnitude
                ShortestDistance = Magnitude
            end
        end
    end

    -- // String check
    if (typeof(TargetParts) == "string") then
        checkTargetPart(TargetParts)
    end

    -- // Loop through all target parts
    if (typeof(TargetParts) == "table") then
        for i = 1, #TargetParts do
            local TargetPartName = TargetParts[i]
            checkTargetPart(TargetPartName)
        end
    end

    -- //
    return ClosestPart, ClosestPartPosition, ClosestPartOnScreen, ClosestPartMagnitudeFromMouse
end

-- // Silent Aim Function
function ValiantAimHacks.getClosestPlayerToCursor()
    -- // Vars
    local TargetPart = nil
    local ClosestPlayer = nil
    local Chance = calcChance(ValiantAimHacks.HitChance)
    local ShortestDistance = 1/0

    -- // Chance
    if (not Chance) then
        ValiantAimHacks.Selected = LocalPlayer
        ValiantAimHacks.SelectedPart = nil

        return LocalPlayer
    end

    -- // Loop through all players
    local AllPlayers = GetPlayers(Players)
    for i = 1, #AllPlayers do
        local Player = AllPlayers[i]
        local Character = ValiantAimHacks.getCharacter(Player)

        if (not ValiantAimHacks.checkWhitelisted(Player) and ValiantAimHacks.checkPlayer(Player) and Character) then
            local TargetPartTemp, PartPos, onScreen, Magnitude = ValiantAimHacks.getClosestTargetPartToCursor(Character)

            if (TargetPartTemp and ValiantAimHacks.checkHealth(Player)) then
                -- // Team Check
                if (ValiantAimHacks.TeamCheck and not ValiantAimHacks.checkTeam(Player, LocalPlayer)) then continue end

                -- // Check if is in FOV
                if (circle.Radius > Magnitude and Magnitude < ShortestDistance) then
                    -- // Check if Visible
                    if (ValiantAimHacks.VisibleCheck and not ValiantAimHacks.isPartVisible(TargetPartTemp, Character)) then continue end

                    -- //
                    ClosestPlayer = Player
                    ShortestDistance = Magnitude
                    TargetPart = TargetPartTemp
                end
            end
        end
    end

    -- // End
    ValiantAimHacks.Selected = ClosestPlayer
    ValiantAimHacks.SelectedPart = TargetPart
end

-- // Heartbeat Function
Heartbeat:Connect(function()
    ValiantAimHacks.updateCircle()
    ValiantAimHacks.getClosestPlayerToCursor()
end)

return ValiantAimHacks
    

	end,
})
local Button = Tab:CreateButton({
	Name = "Feture ( Head Aim )",
	Callback = function()
        Rayfield:Notify({
            Title = "Feture ( 2 )",
            Content = "Succsesfuly !",
            Duration = 4.5,
            Image = 6967081092,
        })

        function getplrsname()
            for i,v in pairs(game:GetChildren()) do
            if v.ClassName == "Players" then
            return v.Name
            end
            end
            end
            local players = getplrsname()
            local plr = game[players].LocalPlayer
            coroutine.resume(coroutine.create(function()
            while  wait(1) do
            coroutine.resume(coroutine.create(function()
            for _,v in pairs(game[players]:GetPlayers()) do
            if v.Name ~= plr.Name and v.Character then
            v.Character.RightUpperLeg.CanCollide = false
            v.Character.RightUpperLeg.Transparency = 10
            v.Character.RightUpperLeg.Size = Vector3.new(13,13,13)
            
            v.Character.LeftUpperLeg.CanCollide = false
            v.Character.LeftUpperLeg.Transparency = 10
            v.Character.LeftUpperLeg.Size = Vector3.new(13,13,13)
            
            v.Character.HeadHB.CanCollide = false
            v.Character.HeadHB.Transparency = 10
            v.Character.HeadHB.Size = Vector3.new(13,13,13)
            
            v.Character.HumanoidRootPart.CanCollide = false
            v.Character.HumanoidRootPart.Transparency = 10
            v.Character.HumanoidRootPart.Size = Vector3.new(13,13,13)
            
            end
            end
            end))
            end
            end))
            

	end,
})
local Button = Tab:CreateButton({
	Name = "Feture ( Aimbot )",
	Callback = function()
		Rayfield:Notify({
            Title = "Feture ( 3 )",
            Content = "Succsesfuly !",
            Duration = 4.5,
            Image = 6967081092,
        })
        local dwCamera = workspace.CurrentCamera
local dwRunService = game:GetService("RunService")
local dwUIS = game:GetService("UserInputService")
local dwEntities = game:GetService("Players")
local dwLocalPlayer = dwEntities.LocalPlayer
local dwMouse = dwLocalPlayer:GetMouse()

local settings = {
Aimbot = true,
Aiming = false,
Aimbot_AimPart = "Head",
Aimbot_TeamCheck = true,
Aimbot_Draw_FOV = true,
Aimbot_FOV_Radius = 200,
Aimbot_FOV_Color = Color3.fromRGB(255,255,255)
}


dwUIS.InputBegan:Connect(function(i)
if i.UserInputType == Enum.UserInputType.MouseButton1 then
    settings.Aiming = true
end
end)

dwUIS.InputEnded:Connect(function(i)
if i.UserInputType == Enum.UserInputType.MouseButton1 then
    settings.Aiming = false
end
end)

dwRunService.RenderStepped:Connect(function()

local dist = math.huge
local closest_char = nil

if settings.Aiming then

    for i,v in next, dwEntities:GetChildren() do 

        if v ~= dwLocalPlayer and
        v.Character and
        v.Character:FindFirstChild("HumanoidRootPart") and
        v.Character:FindFirstChild("Humanoid") and
        v.Character:FindFirstChild("Humanoid").Health > 0 then

            if settings.Aimbot_TeamCheck == true and
            v.Team ~= dwLocalPlayer.Team or
            settings.Aimbot_TeamCheck == false then

                local char = v.Character
                local char_part_pos, is_onscreen = dwCamera:WorldToViewportPoint(char[settings.Aimbot_AimPart].Position)

                if is_onscreen then

                    local mag = (Vector2.new(dwMouse.X, dwMouse.Y) - Vector2.new(char_part_pos.X, char_part_pos.Y)).Magnitude

                    if mag < dist and mag < settings.Aimbot_FOV_Radius then

                        dist = mag
                        closest_char = char

                    end
                end
            end
        end
    end

    if closest_char ~= nil and
    closest_char:FindFirstChild("HumanoidRootPart") and
    closest_char:FindFirstChild("Humanoid") and
    closest_char:FindFirstChild("Humanoid").Health > 0 then

        dwCamera.CFrame = CFrame.new(dwCamera.CFrame.Position, closest_char[settings.Aimbot_AimPart].Position)
    end
end
end)
	end,
})
local Slider = Tab:CreateSlider({
	Name = "Feture ( Aimbot Smoosh )",
	Range = {0, 100},
	Increment = 8,
	Suffix = "Smoosh",
	CurrentValue = 0,
	Flag = "Slider1", -- A flag is the identifier for the configuration file, make sure every element has a different flag if you're using configuration saving to ensure no overlaps
	Callback = function(Value,s)
		Rayfield:Notify({
            Title = "Feture ( 3 )",
            Content = "Succsesfuly , Smoosh Adjusted",
            Duration = 1.5,
            Image = 6967081092,
        })
	end,
})

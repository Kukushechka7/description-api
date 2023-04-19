// создаём команды
Teams.Add("Red", "Teams/Red", { r: 1 });
Teams.Add("Blue", "Teams/Blue", { b: 1 });
// настраиваем группы спавнов
Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);
Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
CREATE TABLE
IF NOT EXISTS `track_users`
(
`id` INT NULL,
`name` VARCHAR
(MAX) NULL,
`username` VARCHAR
(MAX) NULL,
`email` VARCHAR
(MAX) NULL,
`password` VARCHAR
(MAX) NULL,
`date_create` VARCHAR
(MAX) NULL,
`img` VARCHAR
(MAX) NULL,
`randomNum` FLOAT NULL
);

INSERT INTO track_users
VALUES
    (1, 'RichardsonShields', 'user1', 'user1@gmail.com', md5('pass'), NOW(), 'https://vis.placeholder.com/400/872/fff/?text=user1'),
    (2, 'ReevesCooley', 'user2', 'user2@gmail.com', md5('pass'), NOW(), 'https://vis.placeholder.com/400/977/fff/?text=user2'),
    (3, 'CollinsHardy', 'user3', 'user3@gmail.com', md5('pass'), NOW(), 'https://vis.placeholder.com/400/810/fff/?text=user3'),
    (4, 'FeleciaHendricks', 'user4', 'user4@gmail.com', md5('pass'), NOW(), 'https://vis.placeholder.com/400/794/fff/?text=user4'),
    (5, 'DeborahChang', 'user5', 'user5@gmail.com', md5('pass'), NOW(), 'https://vis.placeholder.com/400/869/fff/?text=user5'),
    (6, 'LeblancMcpherson', 'user6', 'user6@gmail.com', md5('pass'), NOW(), 'https://vis.placeholder.com/400/998/fff/?text=user6'),
    (7, 'BeulahGibbs', 'user7', 'user7@gmail.com', md5('pass'), NOW(), 'https://vis.placeholder.com/400/998/fff/?text=user7'),
    (8, 'MossHiggins', 'user8', 'user8@gmail.com', md5('pass'), NOW(), 'https://vis.placeholder.com/400/927/fff/?text=user8'),
    (9, 'StewartBrock', 'user9', 'user9@gmail.com', md5('pass'), NOW(), 'https://vis.placeholder.com/400/825/fff/?text=user9'),
    (10, 'SantosRoberts', 'user10', 'user10@gmail.com', md5('pass'), NOW(), 'https://vis.placeholder.com/400/764/fff/?text=user10');
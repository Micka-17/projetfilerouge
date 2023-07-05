CREATE DATABASE `projetfilrouge` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin */

CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `user_account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `is_logged_in` varchar(45) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_account_role1_idx` (`role_id`),
  CONSTRAINT `fk_user_account_role1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `resources_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `resources_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state` varchar(90) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cat` varchar(90) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `resources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(90) NOT NULL,
  `content` text NOT NULL,
  `resources_type_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `resources_state_id` int(11) DEFAULT NULL,
  `user_account_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_resources_resources_type1_idx_idx` (`resources_type_id`),
  KEY `fk_resources_category1_idx_idx` (`category_id`),
  KEY `fk_resources_resources_state1_idx_idx` (`resources_state_id`),
  KEY `fk_resources_user_account1_idx` (`user_account_id`),
  CONSTRAINT `fk_ressources_category1_idx` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_ressources_ressources_state1_idx` FOREIGN KEY (`resources_state_id`) REFERENCES `resources_state` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_ressources_ressources_type1_idx` FOREIGN KEY (`resources_type_id`) REFERENCES `resources_type` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_ressources_user_account1` FOREIGN KEY (`user_account_id`) REFERENCES `user_account` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `resources_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `resources_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_resources_category_resources` (`resources_id`),
  KEY `fk_resources_category_category` (`category_id`),
  CONSTRAINT `fk_resources_category_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_resources_category_resources` FOREIGN KEY (`resources_id`) REFERENCES `resources` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `favory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `resources_id` int(11) DEFAULT NULL,
  `user_account_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_resources_user` (`resources_id`,`user_account_id`),
  KEY `fk_favory_resources1_idx_idx` (`resources_id`),
  KEY `fk_favory_user_account1_idx` (`user_account_id`),
  CONSTRAINT `fk_favory_ressources1_idx` FOREIGN KEY (`resources_id`) REFERENCES `resources` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_favory_user_account1` FOREIGN KEY (`user_account_id`) REFERENCES `user_account` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(45) NOT NULL,
  `date` date NOT NULL,
  `user_account_id` int(11) DEFAULT NULL,
  `resources_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comments_user_account1_idx_idx` (`user_account_id`),
  KEY `fk_comments_resources1_idx_idx` (`resources_id`),
  CONSTRAINT `fk_comments_ressources1_idx` FOREIGN KEY (`resources_id`) REFERENCES `resources` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_comments_user_account1_idx` FOREIGN KEY (`user_account_id`) REFERENCES `user_account` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `activity_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `activity_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `user_account_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_message_user_account1_idx` (`user_account_id`),
  CONSTRAINT `fk_message_user_account1` FOREIGN KEY (`user_account_id`) REFERENCES `user_account` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `activity_type_id` int(11) DEFAULT NULL,
  `user_account_id` int(11) DEFAULT NULL,
  `activity_messages_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_activity_messages1_idx` (`messages_id`),
  KEY `fk_activity_activity_type1_idx` (`activity_type_id`),
  KEY `fk_activity_user_account1_idx` (`user_account_id`),
  CONSTRAINT `fk_activity_activity_type1` FOREIGN KEY (`activity_type_id`) REFERENCES `activity_type` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_activity_messages1` FOREIGN KEY (`messages_id`) REFERENCES `activity_message` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `fk_activity_user_account1` FOREIGN KEY (`user_account_id`) REFERENCES `user_account` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
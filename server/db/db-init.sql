
-- users Table Create SQL
CREATE TABLE natter.users
(
    `user_number`  INT            NOT NULL    AUTO_INCREMENT COMMENT '유저번호', 
    `email`        VARCHAR(45)    NOT NULL    COMMENT '이메일', 
    `password`     VARCHAR(45)    NOT NULL    COMMENT '비밀번호', 
    `create_date`  DATETIME       NOT NULL    COMMENT '가입일', 
    `user_status`  VARCHAR(45)    NOT NULL    COMMENT '유저상태', 
    `user_class`   VARCHAR(45)    NOT NULL    COMMENT '유저등급', 
    PRIMARY KEY (user_number)
);

ALTER TABLE natter.users COMMENT '유저';


-- posts Table Create SQL
CREATE TABLE natter.posts
(
    `post_number`     INT             NOT NULL    AUTO_INCREMENT COMMENT '게시글번호', 
    `user_number`     INT             NOT NULL    COMMENT '유저번호', 
    `content`         VARCHAR(255)    NOT NULL    COMMENT '내용', 
    `create_date`     DATETIME        NOT NULL    COMMENT '작성시간', 
    `content_status`  VARCHAR(45)     NOT NULL    COMMENT '게시글상태', 
    PRIMARY KEY (post_number)
);

ALTER TABLE natter.posts COMMENT '게시글';

ALTER TABLE natter.posts ADD CONSTRAINT FK_posts_user_number_users_user_number FOREIGN KEY (user_number)
 REFERENCES natter.users (user_number)  ON DELETE RESTRICT ON UPDATE RESTRICT;


-- follow Table Create SQL
CREATE TABLE natter.follow
(
    `follow_number`       INT    NOT NULL    AUTO_INCREMENT COMMENT '팔로우번호', 
    `user_number`         INT    NOT NULL    COMMENT '유저번호', 
    `follow_user_number`  INT    NOT NULL    COMMENT '팔로우유저번호', 
    PRIMARY KEY (follow_number)
);

ALTER TABLE natter.follow COMMENT '팔로우';

ALTER TABLE natter.follow ADD CONSTRAINT FK_follow_user_number_users_user_number FOREIGN KEY (user_number)
 REFERENCES natter.users (user_number)  ON DELETE RESTRICT ON UPDATE RESTRICT;


-- common_code Table Create SQL
CREATE TABLE natter.common_code
(
    `up_cd`        INT            NOT NULL    COMMENT '상위코드', 
    `sub_cd`       INT            NOT NULL    COMMENT '하위코드', 
    `cd_name`      VARCHAR(45)    NOT NULL    COMMENT '코드이름', 
    `create_date`  DATETIME       NOT NULL    COMMENT '코드생성일', 
    `use_yn`       CHAR(1)        NOT NULL    COMMENT '코드사용여부', 
    PRIMARY KEY (up_cd)
);

ALTER TABLE natter.common_code COMMENT '공통코드';


-- post_like Table Create SQL
CREATE TABLE natter.post_like
(
    `post_like_number`  INT        NOT NULL    AUTO_INCREMENT COMMENT '일련번호', 
    `post_number`       INT        NOT NULL    COMMENT '게시글번호', 
    `user_number`       INT        NOT NULL    COMMENT '유저번호', 
    `use_yn`            CHAR(1)    NOT NULL    COMMENT '사용여부', 
    PRIMARY KEY (post_like_number)
);

ALTER TABLE natter.post_like COMMENT '게시글 좋아요';

ALTER TABLE natter.post_like ADD CONSTRAINT FK_post_like_post_number_posts_post_number FOREIGN KEY (post_number)
 REFERENCES natter.posts (post_number)  ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE natter.post_like ADD CONSTRAINT FK_post_like_user_number_users_user_number FOREIGN KEY (user_number)
 REFERENCES natter.users (user_number)  ON DELETE RESTRICT ON UPDATE RESTRICT;


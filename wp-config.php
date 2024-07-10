<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'test' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'JuYWZCMFVHmkqMAR0CucU1TTUGTVV45o8uUBnPuxl9IVaaxacSQZLXbDKgiLUBaw' );
define( 'SECURE_AUTH_KEY',  'sfWGgb9y7xhWDrypKq68FIuxcOW65Ba7rM1bNyxLJ11GCizSXNgoUPfPoyldK5uu' );
define( 'LOGGED_IN_KEY',    'IzMnz4PjvwjChP2BA0ntfjfkYUixp7fWzM32gbHb5wuSOWtMEXXGngYHnn6PhH24' );
define( 'NONCE_KEY',        'ua6bfh3pK1DPgHdMEnwKaTqOqb9g1R1niyl75RXxsLidFQoBlJ2yrvJeh7J5NTIE' );
define( 'AUTH_SALT',        'jp59JNUW6OJeN2TdBpMLndM1dJx0v16gRi3eEpA9QH0Gmg4FUbnojsQuFHCUHxcw' );
define( 'SECURE_AUTH_SALT', 'WeWVA9IXPG38l2DRg2ppofsskOe6OrxZaE3MwnfRiWx2TzvQQJBzUQSXrxChrYJI' );
define( 'LOGGED_IN_SALT',   'hjkfcI5AKYZ8PQveQAeaDw5K8V7L5kFGxHwG710fO3oUAHeFqX6cyd4dCSf3hjKK' );
define( 'NONCE_SALT',       'c0cVoArdGLprYPPtZSxXEoRi6CNsX4taMXSnbuIVmV0FcnCKOkTRwtjcrrEOao8H' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

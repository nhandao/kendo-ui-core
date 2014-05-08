PHP_WRAPPERS_ROOT = 'wrappers/php/'

PHP_DEMOS_ROOT = PHP_WRAPPERS_ROOT
PHP_DEMOS_SRC_ROOT = PHP_DEMOS_ROOT
PHP_LIB_SRC = FileList[PHP_WRAPPERS_ROOT + '/lib/**/*.*']
PHP_DEMOS_RESOURCES = PHP_DEMOS_SRC_ROOT + 'content/'

PHP_DEMOS_SHARED_CONTENT = FileList['demos/mvc/content/{dataviz,shared,web}/**/*']
                .exclude('**/globalization/**/*')

PHP_DEMOS_NAVIGATION= FileList['demos/mvc/content/nav.json']

PHP_DEMOS_SRC = FileList[PHP_DEMOS_SRC_ROOT + '**/*'].exclude('**/tests/**')
                    .include(FileList[PHP_DEMOS_SHARED_CONTENT]
                        .reject { |f| File.directory? f }
                        .sub('demos/mvc/', 'wrappers/php/')
                    )
                    .include(FileList[PHP_DEMOS_NAVIGATION]
                         .sub('demos/mvc/content/', PHP_DEMOS_RESOURCES)
                    )
                    .include(FileList[COMPLETE_MIN_JS]
                        .sub(DIST_JS_ROOT, PHP_DEMOS_RESOURCES + "js")
                    )
                    .include(FileList[MIN_CSS_RESOURCES]
                        .sub('dist/styles', PHP_DEMOS_RESOURCES + "css")
                    )

tree :to => PHP_DEMOS_RESOURCES,
     :from => PHP_DEMOS_SHARED_CONTENT,
     :root => 'demos/mvc/content/'

tree :to => PHP_DEMOS_RESOURCES + "js",
     :from => COMPLETE_MIN_JS,
     :root => DIST_JS_ROOT

tree :to => PHP_DEMOS_RESOURCES + "css",
     :from => MIN_CSS_RESOURCES,
     :root => 'dist/styles/'

tree :to => PHP_DEMOS_RESOURCES,
     :from => PHP_DEMOS_NAVIGATION,
     :root => 'demos/mvc/content/'

namespace :php do
    task :assets_js => [:js, PHP_DEMOS_RESOURCES + "js"]

    task :assets_css => [:less, PHP_DEMOS_RESOURCES + "css"]

    desc('Copy demo resource files')
    task :assets => [:assets_js, :assets_css, PHP_DEMOS_RESOURCES]
end

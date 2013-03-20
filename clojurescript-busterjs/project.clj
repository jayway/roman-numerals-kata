(defproject clojurescript-busterjs "0.1.0-SNAPSHOT"
  :description "ClojureScript version of decimal to roman converter"
  :dependencies [[org.clojure/clojure "1.5.1"]]
  :plugins [[lein-cljsbuild "0.3.0"]]
  :cljsbuild {:builds [{:source-paths ["src"]
                        :compiler {:target :nodejs
                                   :output-to "lib/roman-numerals.js"
                                   :optimizations :simple
                                   :pretty-print true}}]})

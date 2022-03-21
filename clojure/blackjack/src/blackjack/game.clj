(ns blackjack.game
  (:require [card-ascii-art.core :as card]))

(defn new-card []
  "Generates a new card number between 1..13"
  (inc (rand-int 13)))

(defn JQK->10 [card]
  (if (> card 10) 10 card))

(defn A->11 [card]
  (if (= card 1) 11 card))

(defn card-points [cards]
  (let [cards-without-JQK (map JQK->10 cards)
        cards-with-A11 (map A->11 cards-without-JQK)
        sum-with-A1 (reduce + 0 cards-without-JQK)
        sum-with-A11 (reduce + 0 cards-with-A11)]
    (if (> sum-with-A11 21) sum-with-A1 sum-with-A11)))

(defn player [player-name]
  (let [
        card1 (new-card)
        card2 (new-card)
        cards [card1 card2]
        points (card-points cards)]
    {:player-name player-name
     :cards       cards
     :points      points}))

; conj -> retorna um novo vetor com um novo valor adicionado
; assoc -> retorna um novo map com uma nova propriedade adicionada
(defn more-card [player]
  (let [card (new-card)
        cards (conj (:cards player) card)
        ;new-player (assoc player :cards cards)
        new-player (update player :cards conj card)
        points (card-points cards)]
    (assoc new-player :points points)))

(defn player-decision-continue? [player]
  (println (:player-name player) ": mais uma carta? [sim/nao]")
  (= (read-line) "sim"))

(defn dealer-decision-continue? [player-points dealer]
  (let [dealer-points (:points dealer)]
    (and (< dealer-points player-points)
         (< dealer-points 21)
         (<= player-points 21))))


(defn game [player fn-decision-continue?]
  (if (fn-decision-continue? player)
    (let [player-with-more-card (more-card player)]
      (card/print-player player-with-more-card)
      (recur player-with-more-card fn-decision-continue?))
    player))

(defn end-game [player dealer]
  (let [player-points (:points player)
        dealer-points (:points dealer)
        player-name (:player-name player)
        dealer-name (:player-name dealer)
        message (cond
                  (and (> player-points 21) (> dealer-points 21)) "Ambos perderam"
                  (= player-points dealer-points) "Empatou"
                  (> player-points 21) (str dealer-name " ganhou")
                  (> dealer-points 21) (str player-name " ganhou")
                  (> player-points dealer-points) (str player-name " ganhou")
                  (> dealer-points player-points) (str dealer-name " ganhou"))]
    (println " ---------- FINAL ----------")
    (card/print-player player)
    (card/print-player dealer)
    (println message)))

(def player1 (player "Marcos"))
(card/print-player player1)

(def dealer (player "Dealer"))
(card/print-masked-player dealer)

(def player-after-game (game player1 player-decision-continue?))

(def partial-dealer-decision-continue? (partial dealer-decision-continue? (:points player-after-game)))
(def dealer-after-game (game dealer partial-dealer-decision-continue?))

(end-game player-after-game dealer-after-game)
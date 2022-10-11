module Dash exposing (..)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)



-- MAIN


main =
    Browser.element { init = init, subscriptions = \_ -> Sub.none, update = update, view = view }



-- MODEL


type alias Model =
    { name : String
    , password : String
    , passwordAgain : String
    }


init : () -> ( Model, Cmd Msg )
init () =
    ( Model "" "" "", Cmd.none )



-- UPDATE


type Msg
    = Name String
    | Password String
    | PasswordAgain String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        newModel =
            case msg of
                Name name ->
                    { model | name = name }

                Password password ->
                    { model | password = password }

                PasswordAgain password ->
                    { model | passwordAgain = password }
    in
    ( newModel, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    div [ class " flex flex-row items-center " ]
        [ viewInput "text" "Name" model.name Name
        , viewInput "password" "Password" model.password Password
        , viewInput "password" "Re-enter Password" model.passwordAgain PasswordAgain
        , viewValidation model
        ]


viewInput : String -> String -> String -> (String -> msg) -> Html msg
viewInput t p v toMsg =
    input
        [ class " text-black border rounded w-64 py-2 px-3 leading-tight focus:outline-none"
        , type_ t
        , placeholder p
        , value v
        , onInput toMsg
        ]
        []


viewValidation : Model -> Html msg
viewValidation model =
    if model.password == model.passwordAgain then
        div [ class "text-blue-500" ] [ text "OK" ]

    else
        div [ class "text-red-500" ] [ text "Passwords do not match!" ]

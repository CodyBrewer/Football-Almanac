import React, { Component } from "react";

import { Container, Grid } from "@material-ui/core";

import httpService from "../../services/httpService";
import { AxiosResponse } from "axios";

interface IProps {}

interface ICompetition {
  id: number;
  area: object;
  name: string;
  code: string;
  plan: string;
  lastUpdated: string;
}

interface IScore {
  winner: string;
  duration: string;
  fullTime: {
    homeTeam: number | null;
    awayTeam: number | null;
  };
  halfTime: {
    homeTeam: number | null;
    awayTeam: number | null;
  };
  extraTime: {
    homeTeam: number | null;
    awayTeam: number | null;
  };
  penalties: {
    homeTeam: number | null;
    awayTeam: number | null;
  };
}

interface ITeam {
  id: number;
  name: string;
}

interface IReferee {
  id: number;
  name: string;
  nationality: string | null;
}

interface IMatch {
  id: number;
  season: object;
  utcDate: string;
  status:
    | "SCHEDULED"
    | "LIVE"
    | "IN_PLAY"
    | "PAUSED"
    | "FINISHED"
    | "POSTPONED"
    | "SUSPENDED"
    | "CANCELED";
  matchday: number;
  stage: string;
  group: string;
  score: IScore;
  homeTeam: ITeam;
  awayTeam: ITeam;
  referees: IReferee[];
}

interface IState {
  matchday: number;
  matches: IMatch[] | [];
  competition: ICompetition | null;
  error: boolean;
  totalMatchdays: number;
}

class Home extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      matchday: 1,
      matches: [],
      competition: null,
      error: false,
      totalMatchdays: 38
    };
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate() {
    console.log(this.state.matches);
  }

  fetch = () => {
    httpService
      .get(`/v2/competitions/2019/matches?matchday=${this.state.matchday}`)
      .then((response: AxiosResponse) => {
        this.setState({
          competition: response.data.competition,
          matches: response.data.matches
        });
      })
      .catch((error: AxiosResponse) => {
        this.setState({ error: true });
      });
  };

  render() {
    return (
      <Container>
        {this.state.matches
          ? this.state.matches.map((match: IMatch) => (
              <li key={match.id}>
                {match.homeTeam.name} <b>{match.score.fullTime.homeTeam}</b> -{" "}
                <b>{match.score.fullTime.awayTeam}</b> {match.awayTeam.name}
              </li>
            ))
          : Home}
      </Container>
    );
    s;
  }
}

export default Home;

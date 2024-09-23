/// <reference path="./anime-torrent-provider.d.ts" />
/// <reference path="./jackett.d.ts" />
/// <reference path="./global.d.ts" />

class Provider {

  api = "http://127.0.0.1:9117"
  api_key = "<JACKETT_API_KEY>"

  getSettings(): AnimeProviderSettings {
    return {
      canSmartSearch: false,
      smartSearchFilters: [],
      supportsAdult: true,
      type: "main",
    }
  }

  async search(opts: AnimeSearchOptions): Promise<AnimeTorrent[]> {
    const url = new URL(this.api)
    url.pathname = "/api/v2.0/indexers/all/results"
    url.searchParams.set("apikey", this.api_key)
    url.searchParams.set("Category[]", "5070")
    url.searchParams.set("Query", opts.query)

    console.log(url.toString())

    const torrents = await fetch(url.toString()).then(e => e.json() as JackettSearch)
    return torrents.Results.map(t => this.toAnimeTorrent(t))
  }

  async smartSearch(opts: AnimeSmartSearchOptions): Promise<AnimeTorrent[]> {
    return []
  }

  async getTorrentInfoHash(torrent: AnimeTorrent): Promise<string> {
    return torrent.infoHash || ""
  }

  async getTorrentMagnetLink(torrent: AnimeTorrent): Promise<string> {
    return torrent.magnetLink || ""
  }

  toAnimeTorrent(torrent: Result): AnimeTorrent {
    return {
      name: `[${torrent.Tracker}] ${torrent.Title}`,
      date: torrent.PublishDate,
      size: torrent.Size,
      formattedSize: "",
      seeders: torrent.Seeders,
      leechers: torrent.Peers,
      downloadCount: torrent.Grabs ?? -1,
      link: torrent.Details,
      downloadUrl: torrent.Link ?? undefined,
      magnetLink: torrent.MagnetUri ?? undefined,
      infoHash: torrent.InfoHash ?? undefined,
      episodeNumber: -1,
      isBestRelease: false,
      confirmed: false
    }
  }
}
